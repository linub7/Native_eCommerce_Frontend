import { StyleSheet, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import CustomTouchableOpacity from '../../../shared/custom-touchable-opacity';
import { colors } from '../../../../styles';
import { signoutHandler } from '../../../../api/auth';
import { loadingStatus } from '../../../../store/slices/loadingSlice';
import { authenticate } from '../../../../store/slices/authSlice';

const ProfileScreenActionsLineTwo = () => {
  const navigation = useNavigation();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleNavigate = (path) => navigation.navigate(path);
  const handleLogout = async () => {
    const { err, data } = await signoutHandler(token);
    if (err) {
      console.log(err);
      return Toast.show({
        type: 'error',
        text1: err,
      });
    }
    await AsyncStorage.removeItem('@token');
    await AsyncStorage.removeItem('@userData');
    dispatch(loadingStatus({ status: false }));
    dispatch(authenticate({ token: null, userData: null }));
    Toast.show({
      type: 'success',
      text1: 'logged out successfully',
    });

    setTimeout(() => {
      navigation.navigate('home');
    }, 1500);
  };
  return (
    <View style={styles.spaceEvenly}>
      <CustomTouchableOpacity
        touchStyle={styles.boxStyleSecondary}
        icon={'pencil'}
        btnTitle={'Password'}
        textColor={colors.color2}
        profile={true}
        loading={false}
        onPress={() => handleNavigate('change-password')}
      />
      <CustomTouchableOpacity
        touchStyle={styles.boxStyleSecondary}
        icon={'exit-to-app'}
        btnTitle={'Log out'}
        textColor={colors.color2}
        profile={true}
        loading={false}
        onPress={handleLogout}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  spaceEvenly: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-evenly',
  },
  boxStylePrimary: {
    backgroundColor: colors.color1,
    height: 80,
    width: 80,
    borderRadius: 20,
    alignItems: 'center',
  },
  boxStyleSecondary: {
    backgroundColor: colors.color3,
    height: 80,
    width: 80,
    borderRadius: 20,
    alignItems: 'center',
  },
});

export default ProfileScreenActionsLineTwo;
