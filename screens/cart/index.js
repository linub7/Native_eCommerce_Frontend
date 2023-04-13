import { View, StyleSheet } from 'react-native';
import { colors, defaultStyle } from '../../styles';
import HeaderComponent from '../../components/shared/header';
import CommonScreenHeading from '../../components/shared/heading';

import CartScreenLayout from '../../components/cart/layout';
import CartScreenSummary from '../../components/cart/summary';
import CustomTouchableOpacity from '../../components/shared/custom-touchable-opacity';
import { useNavigation } from '@react-navigation/native';

export const cartItems = [
  {
    name: 'Macbook',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/1/1e/MacBook_with_Retina_Display.png',
    product: '2131ddsfs',
    stock: 3,
    price: 4999,
    quantity: 2,
  },
  {
    name: 'Shoes',
    image:
      'https://assets.ajio.com/medias/sys_master/root/20211111/51St/618d0e63f997ddf8f101de9c/-288Wx360H-460991629-clearblack-MODEL.jpg',
    product: 'lcj-21221',
    stock: 5,
    price: 299,
    quantity: 4,
  },
  {
    name: 'Shoes',
    image:
      'https://assets.ajio.com/medias/sys_master/root/20211111/51St/618d0e63f997ddf8f101de9c/-288Wx360H-460991629-clearblack-MODEL.jpg',
    product: 'lcj-2122eewe1',
    stock: 5,
    price: 299,
    quantity: 4,
  },
  {
    name: 'Shoes',
    image:
      'https://assets.ajio.com/medias/sys_master/root/20211111/51St/618d0e63f997ddf8f101de9c/-288Wx360H-460991629-clearblack-MODEL.jpg',
    product: 'lcj-2122rwrwfcx1',
    stock: 5,
    price: 299,
    quantity: 4,
  },
  {
    name: 'Shoes',
    image:
      'https://assets.ajio.com/medias/sys_master/root/20211111/51St/618d0e63f997ddf8f101de9c/-288Wx360H-460991629-clearblack-MODEL.jpg',
    product: 'lcj-21221vxx',
    stock: 5,
    price: 299,
    quantity: 4,
  },
  {
    name: 'Shoes',
    image:
      'https://assets.ajio.com/medias/sys_master/root/20211111/51St/618d0e63f997ddf8f101de9c/-288Wx360H-460991629-clearblack-MODEL.jpg',
    product: 'lcj-21221voppda',
    stock: 5,
    price: 299,
    quantity: 4,
  },
  {
    name: 'Shoes',
    image:
      'https://assets.ajio.com/medias/sys_master/root/20211111/51St/618d0e63f997ddf8f101de9c/-288Wx360H-460991629-clearblack-MODEL.jpg',
    product: 'lcj-2122dsds1voppda',
    stock: 5,
    price: 299,
    quantity: 4,
  },
  {
    name: 'Shoes',
    image:
      'https://assets.ajio.com/medias/sys_master/root/20211111/51St/618d0e63f997ddf8f101de9c/-288Wx360H-460991629-clearblack-MODEL.jpg',
    product: 'lcj-2122dsddsdsqs1voppda',
    stock: 5,
    price: 299,
    quantity: 4,
  },
  {
    name: 'Shoes',
    image:
      'https://assets.ajio.com/medias/sys_master/root/20211111/51St/618d0e63f997ddf8f101de9c/-288Wx360H-460991629-clearblack-MODEL.jpg',
    product: 'lcj-2122dsddsdsqs1vewewewoppda',
    stock: 5,
    price: 299,
    quantity: 4,
  },
];

const CartScreen = () => {
  const navigation = useNavigation();
  const handleIncrease = (id, qty, stock) => {
    console.log('increase', id, qty, stock);
  };
  const handleDecrease = (id, qty) => {
    console.log('decrease', id, qty);
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
      <CartScreenSummary />
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
