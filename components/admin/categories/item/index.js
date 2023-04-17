import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../../styles';
import CommonTouchableIcon from '../../../shared/touchable-icon';

const AdminCategoriesScreenListItem = ({ name, _id, handleDeleteCategory }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <CommonTouchableIcon
        icon={'delete'}
        size={30}
        iconStyle={styles.icon}
        onPress={() => handleDeleteCategory(_id)}
      />
    </View>
  );
};

export default AdminCategoriesScreenListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color2,
    elevation: 5,
    margin: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  icon: {
    backgroundColor: colors.color1,
  },
});
