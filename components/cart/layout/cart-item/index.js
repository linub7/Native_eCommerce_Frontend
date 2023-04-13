import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../../styles';
import CartScreenLayoutCartItemImage from './image';
import CartScreenLayoutCartItemInfos from './infos';
import CartScreenLayoutCartItemActions from './action';

const CartScreenLayoutCartItem = ({
  id,
  name,
  stock,
  amount,
  imgSrc,
  qty,
  handleIncrease,
  handleDecrease,
  index,
}) => {
  return (
    <View style={styles.container}>
      <CartScreenLayoutCartItemImage imgSrc={imgSrc} index={index} />
      <CartScreenLayoutCartItemInfos amount={amount} name={name} />
      <CartScreenLayoutCartItemActions
        qty={qty}
        handleDecrease={() => handleDecrease(id, qty)}
        handleIncrease={() => handleIncrease(id, qty, stock)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    marginVertical: 20,
  },
});

export default CartScreenLayoutCartItem;
