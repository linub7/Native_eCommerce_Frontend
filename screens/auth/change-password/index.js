import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { colors, defaultStyle } from '../../../styles';
import HeaderComponent from '../../../components/shared/header';
import CommonAuthHeading from '../../../components/auth/heading';
import CommonAuthLayout from '../../../components/auth/layout';
import CommonAuthInput from '../../../components/auth/input';
import CommonAuthButton from '../../../components/auth/btn';

const loading = false;

const ChangePasswordScreen = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {
    if (password !== confirmPassword)
      return Toast.show({
        type: 'error',
        text1: 'Password mismatch',
      });

    console.log('change Password');
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
