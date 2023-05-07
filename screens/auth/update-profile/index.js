import { ScrollView, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

import CommonAuthHeading from '../../../components/auth/heading';
import { colors, defaultStyle } from '../../../styles';
import CommonAuthLayout from '../../../components/auth/layout';
import CommonAuthInput from '../../../components/auth/input';
import CommonAuthButton from '../../../components/auth/btn';
import HeaderComponent from '../../../components/shared/header';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadingStatus,
  localLoadingStatus,
} from '../../../store/slices/loadingSlice';
import { getMeHandler, updateProfileHandler } from '../../../api/auth';
import CustomLoader from '../../../components/shared/custom-loader';
import { authenticate } from '../../../store/slices/authSlice';

const UpdateProfileScreen = ({ navigation, route: { params } }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [pinCode, setPinCode] = useState('');

  const { loading, localLoading } = useSelector((state) => state.loading);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    handleGetMe();
  }, []);

  const handleGetMe = async () => {
    dispatch(localLoadingStatus({ status: true }));
    const { err, data } = await getMeHandler(token);
    if (err) {
      console.log(err);
      dispatch(localLoadingStatus({ status: false }));
      Toast.show({
        type: 'error',
        text1: err,
      });
      setTimeout(() => {
        navigation.navigate('profile');
      }, 1000);
    }
    dispatch(localLoadingStatus({ status: false }));
    setName(data?.data?.data?.name);
    setEmail(data?.data?.data?.email);
    setAddress(data?.data?.data?.address);
    setCity(data?.data?.data?.city);
    setCountry(data?.data?.data?.country);
    setPinCode(data?.data?.data?.pinCode);
  };

  const handleUpdateProfile = async () => {
    dispatch(loadingStatus({ status: true }));

    let formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('address', address);
    formData.append('city', city);
    formData.append('country', country);
    formData.append('pinCode', pinCode);
    const { err, data } = await updateProfileHandler(formData, token);
    if (err) {
      console.log(err);
      dispatch(loadingStatus({ status: false }));
      return Toast.show({
        type: 'error',
        text1: err,
      });
    }
    dispatch(loadingStatus({ status: false }));
    await AsyncStorage.removeItem('@userData');
    await AsyncStorage.setItem('@userData', JSON.stringify(data?.data?.data));
    dispatch(authenticate({ token, userData: data?.data?.data }));
    Toast.show({ type: 'success', text1: 'Profile updated successfully.' });
    navigation.navigate('profile');
  };
  return localLoading ? (
    <CustomLoader size={100} color={colors.color3} />
  ) : (
    <View style={[defaultStyle, styles.outerContainer]}>
      <HeaderComponent back={true} />
      <View style={styles.innerContainer}>
        <CommonAuthHeading heading={'Edit Profile'} />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
          <CommonAuthLayout>
            <CommonAuthInput
              color={colors.color1}
              placeholder={'name'}
              value={name}
              onChangeText={setName}
            />
            <CommonAuthInput
              color={colors.color1}
              placeholder={'email'}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <CommonAuthInput
              color={colors.color1}
              placeholder={'address'}
              value={address}
              onChangeText={setAddress}
            />
            <CommonAuthInput
              color={colors.color1}
              placeholder={'city'}
              value={city}
              onChangeText={setCity}
            />
            <CommonAuthInput
              color={colors.color1}
              placeholder={'country'}
              value={country}
              onChangeText={setCountry}
            />
            <CommonAuthInput
              color={colors.color1}
              placeholder={'pic code'}
              value={pinCode}
              onChangeText={setPinCode}
              keyboardType="number-pad"
            />
            <CommonAuthButton
              loading={loading}
              btnTitle={'Update Profile'}
              disabled={
                name === '' ||
                email === '' ||
                address === '' ||
                city === '' ||
                country === '' ||
                pinCode === ''
              }
              onPress={handleUpdateProfile}
              textColor={colors.color2}
            />
          </CommonAuthLayout>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: colors.color2,
  },
  innerContainer: { paddingTop: 70 },
  scroll: {
    elevation: 10,
    borderRadius: 10,
    borderColor: colors.color3,
    backgroundColor: colors.color3,
  },
});

export default UpdateProfileScreen;
