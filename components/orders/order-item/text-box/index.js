import { Text, View } from 'react-native';
import { colors } from '../../../../styles';

const OrdersScreenOrderListItemTextBox = ({ label, value, index }) => {
  return (
    <View
      style={{
        marginVertical: 6,
      }}
    >
      <Text
        style={{
          fontWeight: '900',
          color: index % 2 === 0 ? colors.color3 : colors.color2,
        }}
      >
        {label}:
      </Text>
      <Text style={{ color: index % 2 === 0 ? colors.color3 : colors.color2 }}>
        {value}
      </Text>
    </View>
  );
};

export default OrdersScreenOrderListItemTextBox;
