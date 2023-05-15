import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import CustomTouchableOpacity from '../../../shared/custom-touchable-opacity';
import { colors } from '../../../../styles';

const ProfileScreenActionsLineOne = () => {
  const navigation = useNavigation();
  const { userData } = useSelector((state) => state.auth);

  const handleNavigate = (path) => navigation.navigate(path);
  return (
    <View style={styles.rowContainer}>
      <CustomTouchableOpacity
        touchStyle={styles.boxStylePrimary}
        icon={'format-list-bulleted-square'}
        btnTitle={'Orders'}
        textColor={colors.color2}
        profile={true}
        reverse={true}
        loading={false}
        onPress={() => handleNavigate('orders')}
      />
      {userData?.role === 'admin' && (
        <CustomTouchableOpacity
          touchStyle={styles.boxStyleSecondary}
          icon={'view-dashboard'}
          btnTitle={'Admin'}
          textColor={colors.color2}
          profile={true}
          loading={false}
          onPress={() => handleNavigate('admin-panel')}
        />
      )}
      <CustomTouchableOpacity
        touchStyle={styles.boxStylePrimary}
        icon={'pencil'}
        btnTitle={'Profile'}
        textColor={colors.color2}
        profile={true}
        reverse={true}
        loading={false}
        onPress={() => handleNavigate('update-profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
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

export default ProfileScreenActionsLineOne;
