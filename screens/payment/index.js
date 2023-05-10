import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Toast from 'react-native-toast-message';

import { colors, defaultStyle } from '../../styles';
import HeaderComponent from '../../components/shared/header';
import CommonScreenHeading from '../../components/shared/heading';
import PaymentScreenChoose from '../../components/payment/choose';
import CustomTouchableOpacity from '../../components/shared/custom-touchable-opacity';
import { loadingStatus } from '../../store/slices/loadingSlice';
import { placeOrderHandler } from '../../api/order';
import { clearCartAction } from '../../store/slices/cartSlice';

const PaymentScreen = ({ navigation, route: { params } }) => {
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const handleNavigateToLogin = () => navigation.navigate('login');

  const handlePlaceOrder = async () => {
    dispatch(loadingStatus({ status: true }));
    const orderItems = cartItems;
    const taxPrice = params?.tax;
    const shippingCharges = params?.shippingCharges;
    const { err, data } = await placeOrderHandler(
      orderItems,
      taxPrice,
      shippingCharges,
      token
    );
    if (err) {
      console.log(err);
      dispatch(loadingStatus({ status: false }));
      return Toast.show({
        type: 'error',
        text1: err,
      });
    }
    dispatch(loadingStatus({ status: false }));
    Toast.show({
      type: 'success',
      text1: 'Placed order successfully',
    });
    dispatch(clearCartAction());
    navigation.navigate('home');
  };

  const handleOnlinePayment = () => {
    console.log('online payment');
  };

  return (
    <View style={[defaultStyle, styles.container]}>
      <HeaderComponent back={true} />
      <CommonScreenHeading normalText={'Payment'} boldText={'Method'} />
      <PaymentScreenChoose
        paymentMethod={paymentMethod}
        onValueChange={setPaymentMethod}
      />
      <CustomTouchableOpacity
        styles={styles.btn}
        btnTitle={paymentMethod === 'COD' ? 'PLACE ORDER' : 'PAY'}
        textColor={colors.color2}
        icon={
          paymentMethod === 'COD' ? 'check-circle' : 'circle-multiple-outline'
        }
        onPress={
          !token
            ? handleNavigateToLogin
            : paymentMethod === 'COD'
            ? handlePlaceOrder
            : handleOnlinePayment
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    margin: 10,
    padding: 5,
  },
});

export default PaymentScreen;
