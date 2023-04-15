import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../styles';
import PaymentScreenChooseRadioButton from './radio-btn';

const PaymentScreenChoose = ({ paymentMethod, onValueChange }) => {
  return (
    <View style={styles.container}>
      <PaymentScreenChooseRadioButton
        label={'Cash on Delivery'}
        value={'COD'}
        paymentMethod={paymentMethod}
        onValueChange={onValueChange}
      />
      <PaymentScreenChooseRadioButton
        label={'ONLINE'}
        value={'ONLINE'}
        paymentMethod={paymentMethod}
        onValueChange={onValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color3,
    padding: 30,
    marginHorizontal: 30,
    borderRadius: 10,
    marginVertical: 20,
    flex: 1,
    justifyContent: 'center',
  },
});

export default PaymentScreenChoose;
