import { StyleSheet, View } from 'react-native';
import { colors, defaultStyle } from '../../styles';
import HeaderComponent from '../../components/shared/header';
import CommonScreenHeading from '../../components/shared/heading';
import PaymentScreenChoose from '../../components/payment/choose';
import { useState } from 'react';
import CustomTouchableOpacity from '../../components/shared/custom-touchable-opacity';

const PaymentScreen = ({ navigation, route: { params } }) => {
  const [paymentMethod, setPaymentMethod] = useState('COD');

  const isAuthenticated = false;

  const handleNavigateToLogin = () => navigation.navigate('login');

  const handlePlaceOrder = () => {
    console.log('place order');
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
          !isAuthenticated
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
