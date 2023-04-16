import { StyleSheet, View } from 'react-native';
import CustomTouchableOpacity from '../../../shared/custom-touchable-opacity';
import { colors } from '../../../../styles';
import { useNavigation } from '@react-navigation/native';

const ProfileScreenActionsLineTwo = () => {
  const navigation = useNavigation();
  const handleNavigate = (path) => navigation.navigate(path);
  const handleLogout = () => {
    console.log('logout');
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
