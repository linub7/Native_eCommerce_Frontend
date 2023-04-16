import { View, StyleSheet } from 'react-native';
import { colors, defaultStyle } from '../../styles';
import CommonAuthHeading from '../../components/auth/heading';
import { useState } from 'react';
import ProfileScreenChangeAvatar from '../../components/profile/change-avatar';
import ProfileScreenUserInfoText from '../../components/profile/user-info-text';
import ProfileScreenActions from '../../components/profile/actions';
import CustomFooter from '../../components/shared/footer';
import CustomLoader from '../../components/shared/custom-loader';

const user = {
  name: 'Mohammad',
  email: 'a@gmail.com',
};

const loading = false;

const ProfileScreen = ({ navigation }) => {
  const [avatar, setAvatar] = useState(null);
  const handleNavigateToCamera = () =>
    navigation.navigate('camera', { updateProfile: true });
  return (
    <>
      <View style={defaultStyle}>
        <CommonAuthHeading heading={'Profile'} />
        {loading ? (
          <CustomLoader size={100} color={colors.color3} />
        ) : (
          <>
            <View style={styles.container}>
              <ProfileScreenChangeAvatar
                avatar={avatar}
                handleNavigateToCamera={handleNavigateToCamera}
              />
              <ProfileScreenUserInfoText
                label={user?.name}
                styles={styles.name}
              />
              <ProfileScreenUserInfoText
                label={user?.email}
                styles={styles.email}
              />
            </View>
            <ProfileScreenActions />
          </>
        )}
      </View>
      <CustomFooter activeRoute="profile" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 7,
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    color: colors.color2,
  },
  email: {
    fontWeight: '300',
    color: colors.color2,
  },
});

export default ProfileScreen;
