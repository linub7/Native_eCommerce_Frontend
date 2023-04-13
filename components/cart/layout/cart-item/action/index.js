import { StyleSheet, Text, View } from 'react-native';
import CartScreenLayoutCartItemActionsCustomTouchable from './custom-touchable';
import { colors } from '../../../../../styles';

const CartScreenLayoutCartItemActions = ({
  qty,
  handleDecrease,
  handleIncrease,
}) => {
  return (
    <View style={styles.action}>
      <CartScreenLayoutCartItemActionsCustomTouchable
        icon={'minus'}
        onPress={handleDecrease}
      />
      <Text style={styles.qty}>{qty}</Text>
      <CartScreenLayoutCartItemActionsCustomTouchable
        icon={'plus'}
        onPress={handleIncrease}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  action: {
    alignItems: 'center',
    width: '20%',
    height: 80,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  qty: {
    backgroundColor: colors.color4,
    height: 25,
    width: 25,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color5,
  },
});

export default CartScreenLayoutCartItemActions;
