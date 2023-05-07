import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';

import { colors, defaultStyle } from '../../../styles';
import HeaderComponent from '../../../components/shared/header';
import CommonAuthHeading from '../../../components/auth/heading';
import CommonAuthLayout from '../../../components/auth/layout';
import CommonAuthInput from '../../../components/auth/input';
import CommonAuthButton from '../../../components/auth/btn';
import { updatePasswordHandler } from '../../../api/auth';
import { authenticate } from '../../../store/slices/authSlice';
import { loadingStatus } from '../../../store/slices/loadingSlice';

const ChangePasswordScreen = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { token } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  const handleChangePassword = async () => {
    if (password !== confirmPassword)
      return Toast.show({
        type: 'error',
        text1: 'Password mismatch',
      });

    dispatch(loadingStatus({ status: true }));

    const { err, data } = await updatePasswordHandler(
      oldPassword,
      password,
      confirmPassword,
      token
    );

    if (err) {
      console.log(err);
      dispatch(loadingStatus({ status: false }));
      return Toast.show({
        type: 'error',
        text1: err,
      });
    }

    await AsyncStorage.setItem('@token', JSON.stringify(data?.token));
    await AsyncStorage.setItem('@userData', JSON.stringify(data?.data?.user));
    dispatch(authenticate({ token: data?.token, userData: data?.data?.user }));
    dispatch(loadingStatus({ status: false }));
    Toast.show({
      type: 'success',
      text1: 'Changed password successfully',
    });

    setTimeout(() => {
      navigation.navigate('profile');
    }, 1500);
  };
  return (
    <>
      <HeaderComponent back={true} />
      <View style={[defaultStyle, styles.outerContainer]}>
        <CommonAuthHeading heading={'Edit Password'} />
        <CommonAuthLayout>
          <CommonAuthInput
            color={colors.color1}
            placeholder={'old password'}
            value={oldPassword}
            onChangeText={setOldPassword}
            secureTextEntry={true}
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
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
          />
          <CommonAuthButton
            loading={loading}
            btnTitle={'Change Password'}
            disabled={password === '' || confirmPassword === ''}
            onPress={handleChangePassword}
            textColor={colors.color2}
          />
        </CommonAuthLayout>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: colors.color2,
    paddingTop: 100,
  },
  innerContainer: { paddingTop: 70 },
});

export default ChangePasswordScreen;
