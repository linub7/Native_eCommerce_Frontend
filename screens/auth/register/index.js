import { ScrollView, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { colors, defaultStyle } from '../../../styles';
import CommonAuthHeading from '../../../components/auth/heading';
import CommonAuthLayout from '../../../components/auth/layout';
import CommonAuthInput from '../../../components/auth/input';
import CommonAuthButton from '../../../components/auth/btn';
import CommonAuthSeparator from '../../../components/auth/separator';
import CommonAuthFooterLink from '../../../components/auth/footer-link';
import CustomFooter from '../../../components/shared/footer';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [pinCode, setPinCode] = useState('');

  const handleRegister = () => {
    console.log('Register');
  };
  const handleNavigateToLogin = () => navigation.navigate('login');
  const loading = false;
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
