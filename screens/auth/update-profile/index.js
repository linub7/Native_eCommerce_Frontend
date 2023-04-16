import { ScrollView, StyleSheet, View } from 'react-native';
import CommonAuthHeading from '../../../components/auth/heading';
import { colors, defaultStyle } from '../../../styles';
import { useState } from 'react';
import CommonAuthLayout from '../../../components/auth/layout';
import CommonAuthInput from '../../../components/auth/input';
import CommonAuthButton from '../../../components/auth/btn';
import HeaderComponent from '../../../components/shared/header';

const loading = false;

const UpdateProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [pinCode, setPinCode] = useState('');

  const handleUpdateProfile = () => {
    console.log('Update Profile');
  };
  return (
    <View style={[defaultStyle, styles.outerContainer]}>
      <HeaderComponent back={true} />
      <View style={styles.innerContainer}>
        <CommonAuthHeading heading={'Edit Profile'} />
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
              btnTitle={'Update Profile'}
              disabled={
                name === '' ||
                email === '' ||
                address === '' ||
                city === '' ||
                country === '' ||
                pinCode === ''
              }
              onPress={handleUpdateProfile}
              textColor={colors.color2}
            />
          </CommonAuthLayout>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: colors.color2,
  },
  innerContainer: { paddingTop: 70 },
  scroll: {
    elevation: 10,
    borderRadius: 10,
    borderColor: colors.color3,
    backgroundColor: colors.color3,
  },
});

export default UpdateProfileScreen;
