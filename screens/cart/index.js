import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';

import { colors, defaultStyle } from '../../styles';
import HeaderComponent from '../../components/shared/header';
import CommonScreenHeading from '../../components/shared/heading';
import CartScreenLayout from '../../components/cart/layout';
import CartScreenSummary from '../../components/cart/summary';
import CustomTouchableOpacity from '../../components/shared/custom-touchable-opacity';
import { addToCartAction } from '../../store/slices/cartSlice';

const CartScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const itemsPrice = cartItems.reduce((a, b) => a + b.price * b.quantity, 0);

  const handleIncrease = (id, name, price, image, stock, qty) => {
    if (qty === stock)
      return Toast.show({
        type: 'error',
        text1: 'OOPS! maximum value added 😎',
      });
    const element = cartItems.find((el) => el.product === id);
    const item = {
      product: id,
      name,
      price,
      image,
      stock,
      quantity: element ? element.quantity + 1 : qty,
    };
    dispatch(addToCartAction({ item }));
  };
  const handleDecrease = (id, name, price, image, stock, qty) => {
    if (qty === 1)
      return Toast.show({
        type: 'error',
        text1: 'OOPS! minimum value is 1 😊',
      });
    const element = cartItems.find((el) => el.product === id);
    const item = {
      product: id,
      name,
      price,
      image,
      stock,
      quantity: element ? element.quantity - 1 : qty,
    };
    dispatch(addToCartAction({ item }));
  };

  const handleCheckout = () => {
    cartItems?.length > 0 ? navigation.navigate('confirm-order') : null;
  };
  return (
    <View style={[defaultStyle, styles.container]}>
      <HeaderComponent back={true} emptyCart={true} />
      <CommonScreenHeading normalText={'Shopping'} boldText={'Cart'} />
      <CartScreenLayout
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        cartItems={cartItems}
      />
      <CartScreenSummary itemCount={cartItems?.length} itemPrice={itemsPrice} />
      <CustomTouchableOpacity
        btnTitle={'Checkout'}
        icon={'cart'}
        styles={styles.checkoutBtn}
        textColor={colors.color2}
        onPress={handleCheckout}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  checkoutBtn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    padding: 5,
    margin: 30,
  },
});

export default CartScreen;
