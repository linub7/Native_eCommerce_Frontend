import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { colors, defaultStyle } from '../../styles';
import HeaderComponent from '../../components/shared/header';
import CommonScreenHeading from '../../components/shared/heading';
import ConfirmOrderScreenOrders from '../../components/confirm-order/orders';
import ConfirmOrderScreenPriceTag from '../../components/confirm-order/price-tag';
import CustomTouchableOpacity from '../../components/shared/custom-touchable-opacity';

const ConfirmOrderScreen = () => {
  const navigation = useNavigation();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    if (cartItems?.length < 1) navigation.navigate('home');
  }, [cartItems.length]);

  const itemsPrice = cartItems.reduce((a, b) => a + b.price * b.quantity, 0);
  const shippingCharges = itemsPrice > 1000 ? 200 : 0;
  const tax = Number((0.18 * itemsPrice).toFixed(2));
  const totalAmount = itemsPrice + shippingCharges + tax;

  const handleNavigate = () =>
    navigation.navigate('payment', {
      itemsPrice,
      shippingCharges,
      tax,
      totalAmount,
    });

  return (
    <View style={[defaultStyle, styles.container]}>
      <HeaderComponent back={true} />
      <CommonScreenHeading normalText={'Confirm'} boldText={'Order'} />
      <ConfirmOrderScreenOrders cartItems={cartItems} />
      <ConfirmOrderScreenPriceTag heading={'Subtotal'} value={itemsPrice} />
      <ConfirmOrderScreenPriceTag heading={'Tax'} value={tax} />
      <ConfirmOrderScreenPriceTag
        heading={'Shipping Charges'}
        value={shippingCharges}
      />
      <ConfirmOrderScreenPriceTag heading={'Total'} value={totalAmount} />
      <CustomTouchableOpacity
        btnTitle={'Purchase'}
        icon={'chevron-right'}
        onPress={handleNavigate}
        styles={styles.purchaseBtn}
        textColor={colors.color2}
      />
    </View>
  );
};

export default ConfirmOrderScreen;

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  innerContainer: {
    paddingLeft: 30,
  },
  purchaseBtn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    padding: 5,
    margin: 10,
  },
});
