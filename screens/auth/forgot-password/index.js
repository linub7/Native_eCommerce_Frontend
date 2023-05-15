import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Toast from 'react-native-toast-message';

import { colors, defaultStyle } from '../../../styles';
import CommonAuthHeading from '../../../components/auth/heading';
import CommonAuthLayout from '../../../components/auth/layout';
import CommonAuthInput from '../../../components/auth/input';
import CommonAuthButton from '../../../components/auth/btn';
import CommonAuthFooterLink from '../../../components/auth/footer-link';
import CommonAuthSeparator from '../../../components/auth/separator';
import { loadingStatus } from '../../../store/slices/loadingSlice';
import { forgotPasswordHandler } from '../../../api/auth';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.loading);

  const handleNavigateToLogin = () => navigation.navigate('login');

  const handleSendResetToken = async () => {
    dispatch(loadingStatus({ status: true }));
    const { err, data } = await forgotPasswordHandler(email);
    if (err) {
      console.log(err);
      dispatch(loadingStatus({ status: false }));
      return Toast.show({ type: 'error', text1: err });
    }
    dispatch(loadingStatus({ status: false }));
    Toast.show({ type: 'success', text1: 'OTP sent. Please check your inbox' });
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
            disabled={email === '' || loading}
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
