import { StyleSheet, View } from 'react-native';
import { colors, defaultStyle } from '../../../styles';
import CommonAuthHeading from '../../../components/auth/heading';
import CommonAuthLayout from '../../../components/auth/layout';
import CommonAuthInput from '../../../components/auth/input';
import CommonAuthSeparator from '../../../components/auth/separator';
import CommonAuthFooterLink from '../../../components/auth/footer-link';
import CommonAuthButton from '../../../components/auth/btn';
import { useState } from 'react';

const VerifyScreen = ({ navigation }) => {
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const loading = false;

  const handleResendOtp = () => navigation.navigate('forgot-password');
  const handleChangePassword = () => {};
  return (
    <View style={[defaultStyle, styles.outerContainer]}>
      <CommonAuthHeading heading={'Reset Password'} />
      <CommonAuthLayout>
        <CommonAuthInput
          color={colors.color1}
          placeholder={'otp'}
          value={otp}
          onChangeText={setOtp}
          keyboardType="number-pad"
        />
        <CommonAuthInput
          color={colors.color1}
          placeholder={'password'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <CommonAuthButton
          loading={loading}
          btnTitle={'Reset Password'}
          disabled={otp === '' || password === ''}
          onPress={handleChangePassword}
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
