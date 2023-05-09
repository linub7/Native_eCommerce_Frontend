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
  price,
  image,
}) => {
  return (
    <View style={styles.container}>
      <CartScreenLayoutCartItemImage imgSrc={imgSrc} index={index} />
      <CartScreenLayoutCartItemInfos amount={amount} name={name} id={id} />
      <CartScreenLayoutCartItemActions
        qty={qty}
        handleDecrease={() =>
          handleDecrease(id, name, price, image, stock, qty)
        }
        handleIncrease={() =>
          handleIncrease(id, name, price, image, stock, qty)
        }
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
