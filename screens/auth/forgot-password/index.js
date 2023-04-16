import { StyleSheet, View } from 'react-native';
import { colors, defaultStyle } from '../../../styles';
import CommonAuthHeading from '../../../components/auth/heading';
import CommonAuthLayout from '../../../components/auth/layout';
import CommonAuthInput from '../../../components/auth/input';
import { useState } from 'react';
import CommonAuthButton from '../../../components/auth/btn';
import CommonAuthFooterLink from '../../../components/auth/footer-link';
import CommonAuthSeparator from '../../../components/auth/separator';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const loading = false;

  const handleNavigateToLogin = () => navigation.navigate('login');

  const handleSendResetToken = () => {
    // temporary
    navigation.navigate('verify');
  };
  return (
    <>
      <View style={[defaultStyle, styles.outerContainer]}>
        <CommonAuthHeading heading={'Forgot Password'} />
        <CommonAuthLayout>
          <CommonAuthInput
            color={colors.color1}
            placeholder={'email'}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <CommonAuthButton
            loading={loading}
            btnTitle={'Send OTP'}
            disabled={email === ''}
            onPress={handleSendResetToken}
            textColor={colors.color2}
          />
          <CommonAuthSeparator label={'Or'} />
          <CommonAuthFooterLink
            onPress={handleNavigateToLogin}
            label={'Login'}
          />
        </CommonAuthLayout>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: colors.color2,
  },
});

export default ForgotPasswordScreen;
