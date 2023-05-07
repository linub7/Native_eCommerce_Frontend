import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { colors, defaultStyle } from '../../styles';
import CommonAuthHeading from '../../components/auth/heading';
import { useEffect, useState } from 'react';
import ProfileScreenChangeAvatar from '../../components/profile/change-avatar';
import ProfileScreenUserInfoText from '../../components/profile/user-info-text';
import ProfileScreenActions from '../../components/profile/actions';
import CustomFooter from '../../components/shared/footer';
import CustomLoader from '../../components/shared/custom-loader';
import { loadingStatus } from '../../store/slices/loadingSlice';
import { updateProfileHandler } from '../../api/auth';
import mime from 'mime';
import { authenticate } from '../../store/slices/authSlice';

const ProfileScreen = ({ navigation, route: { params } }) => {
  const [avatar, setAvatar] = useState(null);

  const { userData } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.loading);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (params?.image) {
      setAvatar(params?.image);
      handleUpdateProfilePhoto(params?.image);
    }
  }, [params]);

  const handleUpdateProfilePhoto = async (uri) => {
    dispatch(loadingStatus({ status: true }));
    let formData = new FormData();
    formData.append('photo', {
      uri,
      type: mime.getType(uri),
      name: uri?.split('/').pop(),
    });
    const { err, data } = await updateProfileHandler(formData, token);
    if (err) {
      console.log(err);
      dispatch(loadingStatus({ status: false }));
      return Toast.show({
        type: 'error',
        text1: err,
      });
    }
    await AsyncStorage.removeItem('@userData');
    await AsyncStorage.setItem('@userData', JSON.stringify(data?.data?.data));
    dispatch(authenticate({ token, userData: data?.data?.data }));
    dispatch(loadingStatus({ status: false }));
  };

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
                avatar={userData?.photo?.url ? userData?.photo?.url : avatar}
                handleNavigateToCamera={handleNavigateToCamera}
              />
              <ProfileScreenUserInfoText
                label={userData?.name}
                styles={styles.name}
              />
              <ProfileScreenUserInfoText
                label={userData?.email}
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
