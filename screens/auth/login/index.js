import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, defaultStyle } from '../../../styles';
import CommonAuthHeading from '../../../components/auth/heading';
import CommonAuthInput from '../../../components/auth/input';
import ForgotPasswordAction from '../../../components/auth/forgot-password-action';
import CommonAuthButton from '../../../components/auth/btn';
import CommonAuthSeparator from '../../../components/auth/separator';
import CommonAuthFooterLink from '../../../components/auth/footer-link';
import CustomFooter from '../../../components/shared/footer';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleNavigateToForgot = () => navigation.navigate('forgot-password');
  const handleLogin = () => {
    console.log('Login');
  };
  const handleNavigateToRegister = () => navigation.navigate('register');
  const loading = false;
  return (
    <>
      <View style={[defaultStyle, styles.outerContainer]}>
        <CommonAuthHeading heading={'Login'} />
        <View style={styles.container}>
          <CommonAuthInput
            color={colors.color1}
            placeholder={'email'}
            value={email}
            onChangeText={setEmail}
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
        </View>
      </View>
      <CustomFooter activeRoute="profile" />
    </>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: colors.color2,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.color3,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 10,
  },
});

export default LoginScreen;
