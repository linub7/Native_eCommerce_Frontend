import { ScrollView, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { colors, defaultStyle } from '../../../styles';
import CommonAuthHeading from '../../../components/auth/heading';
import CommonAuthLayout from '../../../components/auth/layout';
import CommonAuthInput from '../../../components/auth/input';
import CommonAuthButton from '../../../components/auth/btn';
import CommonAuthSeparator from '../../../components/auth/separator';
import CommonAuthFooterLink from '../../../components/auth/footer-link';
import CustomFooter from '../../../components/shared/footer';
import { useDispatch, useSelector } from 'react-redux';
import { signupHandler } from '../../../api/auth';
import { loadingStatus } from '../../../store/slices/loadingSlice';
import { authenticate } from '../../../store/slices/authSlice';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [pinCode, setPinCode] = useState('');

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.loading);

  const handleRegister = async () => {
    if (password.length < 8)
      return Toast.show({
        type: 'error',
        text1: 'Password length must be at least 8 character',
      });

    if (password !== passwordConfirm)
      return Toast.show({
        type: 'error',
        text1: 'Password & Confirm Password must be same',
      });

    dispatch(loadingStatus({ status: true }));

    const { err, data } = await signupHandler(
      name,
      email,
      password,
      passwordConfirm,
      address,
      city,
      country,
      pinCode
    );

    if (err) {
      console.log(err);

      const errors = err.split('.');
      for (let index = 0; index < errors.length; index++) {
        const element = errors[index];
        setTimeout(
          () => {
            Toast.show({
              type: 'error',
              text1: element,
              // topOffset: index * 50,
              autoHide: true,
              visibilityTime: index + 3000,
            });
          },
          index === 0 ? 3000 : index * 3000
        );
      }
      dispatch(loadingStatus({ status: false }));
      return;
    }
    await AsyncStorage.setItem('@token', JSON.stringify(data?.token));
    await AsyncStorage.setItem('@userData', JSON.stringify(data?.data?.user));
    dispatch(authenticate({ token: data?.token, userData: data?.data?.user }));
    dispatch(loadingStatus({ status: false }));
    Toast.show({
      type: 'success',
      text1: 'Registered successfully',
    });
    setTimeout(() => {
      navigation.navigate('home');
    }, 1500);
  };
  const handleNavigateToLogin = () => navigation.navigate('login');

  return (
    <>
      <View style={[defaultStyle, styles.outerContainer]}>
        <CommonAuthHeading heading={'Register'} />
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
              placeholder={'password'}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
            <CommonAuthInput
              color={colors.color1}
              placeholder={'confirm password'}
              value={passwordConfirm}
              onChangeText={setPasswordConfirm}
              secureTextEntry={true}
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
              btnTitle={'Register'}
              disabled={
                name === '' ||
                email === '' ||
                password === '' ||
                address === '' ||
                city === '' ||
                country === '' ||
                pinCode === ''
              }
              onPress={handleRegister}
              textColor={colors.color2}
            />
            <CommonAuthSeparator label={'Or'} />
            <CommonAuthFooterLink
              onPress={handleNavigateToLogin}
              label={'Login'}
            />
          </CommonAuthLayout>
        </ScrollView>
      </View>
      <CustomFooter activeRoute="profile" />
    </>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: colors.color2,
  },
  scroll: {
    elevation: 10,
    borderRadius: 10,
    borderColor: colors.color3,
  },
});

export default RegisterScreen;
