import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Toast from 'react-native-toast-message';

import { colors, defaultStyle } from '../../../styles';
import CommonAuthHeading from '../../../components/auth/heading';
import CommonAuthLayout from '../../../components/auth/layout';
import CommonAuthInput from '../../../components/auth/input';
import CommonAuthSeparator from '../../../components/auth/separator';
import CommonAuthFooterLink from '../../../components/auth/footer-link';
import CommonAuthButton from '../../../components/auth/btn';
import { loadingStatus } from '../../../store/slices/loadingSlice';
import { resetPasswordHandler } from '../../../api/auth';

const VerifyScreen = ({ navigation }) => {
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const { loading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const handleResendOtp = () => navigation.navigate('forgot-password');
  const handleResetPassword = async () => {
    dispatch(loadingStatus({ status: true }));
    const { err, data } = await resetPasswordHandler(
      password,
      passwordConfirm,
      otp
    );
    if (err) {
      console.log(err);
      dispatch(loadingStatus({ status: false }));
      return Toast.show({
        type: 'error',
        text1: err,
      });
    }
    dispatch(loadingStatus({ status: false }));
    Toast.show({ type: 'success', text1: 'Password reseted successfully.' });
    navigation.navigate('login');
  };
  return (
    <View style={[defaultStyle, styles.outerContainer]}>
      <CommonAuthHeading heading={'Reset Password'} />
      <CommonAuthLayout>
        <CommonAuthInput
          color={colors.color1}
          placeholder={'otp'}
          value={otp}
          onChangeText={setOtp}
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
          placeholder={'password confirm'}
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          secureTextEntry={true}
        />

        <CommonAuthButton
          loading={loading}
          btnTitle={'Reset Password'}
          disabled={
            otp === '' || password === '' || passwordConfirm === '' || loading
          }
          onPress={handleResetPassword}
          textColor={colors.color2}
        />
        <CommonAuthSeparator label={'Or'} />
        <CommonAuthFooterLink onPress={handleResendOtp} label={'Resend OTP'} />
      </CommonAuthLayout>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: colors.color2,
  },
});

export default VerifyScreen;
