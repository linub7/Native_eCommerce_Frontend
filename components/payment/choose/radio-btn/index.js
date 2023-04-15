import { StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { colors } from '../../../../styles';

const PaymentScreenChooseRadioButton = ({
  label,
  value,
  paymentMethod,
  onValueChange,
}) => {
  return (
    <RadioButton.Group value={paymentMethod} onValueChange={onValueChange}>
      <View style={styles.radio}>
        <Text style={styles.radioTxt}>{label}</Text>
        <RadioButton color={colors.color1} value={value} />
      </View>
    </RadioButton.Group>
  );
};

const styles = StyleSheet.create({
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  radioTxt: {
    fontWeight: '600',
    fontSize: 18,
    textTransform: 'uppercase',
    color: colors.color2,
  },
});

export default PaymentScreenChooseRadioButton;
