import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';

import { colors, defaultStyle } from '../../../styles';
import CommonAuthHeading from '../../../components/auth/heading';
import CommonAuthInput from '../../../components/auth/input';
import ForgotPasswordAction from '../../../components/auth/forgot-password-action';
import CommonAuthButton from '../../../components/auth/btn';
import CommonAuthSeparator from '../../../components/auth/separator';
import CommonAuthFooterLink from '../../../components/auth/footer-link';
import CustomFooter from '../../../components/shared/footer';
import CommonAuthLayout from '../../../components/auth/layout';
import { loadingStatus } from '../../../store/slices/loadingSlice';
import { signinHandler } from '../../../api/auth';
import { authenticate } from '../../../store/slices/authSlice';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.loading);

  const handleNavigateToForgot = () => navigation.navigate('forgot-password');

  const handleLogin = async () => {
    dispatch(loadingStatus({ status: true }));
    const { err, data } = await signinHandler(email, password);
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
      text1: 'Profile Photo updated successfully',
    });
    navigation.navigate('home');
  };
  const handleNavigateToRegister = () => navigation.navigate('register');

  return (
    <>
      <View style={[defaultStyle, styles.outerContainer]}>
        <CommonAuthHeading heading={'Login'} />
        <CommonAuthLayout>
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
          <ForgotPasswordAction
            text={'Forgot Password?'}
            onPress={handleNavigateToForgot}
          />
          <CommonAuthButton
            loading={loading}
            btnTitle={'Login'}
            disabled={email === '' || password === ''}
            onPress={handleLogin}
            textColor={colors.color2}
          />
          <CommonAuthSeparator label={'Or'} />
          <CommonAuthFooterLink
            onPress={handleNavigateToRegister}
            label={'Register'}
          />
        </CommonAuthLayout>
      </View>
      <CustomFooter activeRoute="profile" />
    </>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: colors.color2,
  },
});

export default LoginScreen;
