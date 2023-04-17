import { StyleSheet, View } from 'react-native';
import CustomTouchableOpacity from '../../../shared/custom-touchable-opacity';
import { colors } from '../../../../styles';
import { useNavigation } from '@react-navigation/native';

const AdminPanelScreenActions = () => {
  const navigation = useNavigation();
  const handleNavigate = (path) => navigation.navigate(path);
  return (
    <View style={styles.container}>
      <CustomTouchableOpacity
        touchStyle={styles.boxStylePrimary}
        icon={'plus'}
        btnTitle={'Product'}
        textColor={colors.color2}
        profile={true}
        reverse={true}
        loading={false}
        onPress={() => handleNavigate('new-product')}
      />
      <CustomTouchableOpacity
        touchStyle={styles.boxStyleSecondary}
        icon={'format-list-bulleted-square'}
        btnTitle={'All Orders'}
        textColor={colors.color2}
        profile={true}
        loading={false}
        onPress={() => handleNavigate('admin-orders')}
      />
      <CustomTouchableOpacity
        touchStyle={styles.boxStylePrimary}
        icon={'plus'}
        btnTitle={'Category'}
        textColor={colors.color2}
        profile={true}
        reverse={true}
        loading={false}
        onPress={() => handleNavigate('admin-categories')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default AdminPanelScreenActions;
