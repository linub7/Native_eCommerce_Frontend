import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { colors } from '../../../../../../styles';

const CartScreenLayoutCartItemActionsCustomTouchable = ({ icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Avatar.Icon icon={icon} size={20} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    borderRadius: 5,
    backgroundColor: colors.color5,
    height: 25,
  },
});

export default CartScreenLayoutCartItemActionsCustomTouchable;
