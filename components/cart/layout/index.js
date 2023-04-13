import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CartScreenLayoutCartItem from './cart-item';

const CartScreenLayout = ({ handleIncrease, handleDecrease, cartItems }) => {
  return (
    <View style={styles.cartLayout}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {cartItems?.map((el, index) => (
          <CartScreenLayoutCartItem
            key={index}
            id={el.product}
            name={el.name}
            stock={el.stock}
            amount={el.price}
            imgSrc={el.image}
            qty={el.quantity}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
            index={index}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cartLayout: {
    paddingVertical: 20,
    flex: 1,
  },
});

export default CartScreenLayout;
