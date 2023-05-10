import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../styles';
import OrdersScreenOrderListItemTextBox from './text-box';
import { Button } from 'react-native-paper';

const OrdersScreenOrderListItem = ({
  _id,
  totalAmount,
  address,
  orderDate,
  status,
  paymentMethod,
  handleUpdate,
  admin = false,
  loading,
  index = 0,
}) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: index % 2 === 0 ? colors.color2 : colors.color3 },
      ]}
    >
      <Text
        style={[
          styles.text,
          { backgroundColor: index % 2 === 0 ? colors.color3 : colors.color1 },
        ]}
      >
        ID - #{_id}
      </Text>
      <OrdersScreenOrderListItemTextBox
        label={'Address'}
        value={address}
        index={index}
      />
      <OrdersScreenOrderListItemTextBox
        label={'Order Date'}
        value={orderDate?.split('T')}
        index={index}
      />
      <OrdersScreenOrderListItemTextBox
        label={'Price'}
        value={`$${totalAmount}`}
        index={index}
      />
      <OrdersScreenOrderListItemTextBox
        label={'Status'}
        value={status}
        index={index}
      />
      <OrdersScreenOrderListItemTextBox
        label={'Payment Method'}
        value={paymentMethod}
        index={index}
      />
      {admin && (
        <Button
          icon={'update'}
          mode="outlined"
          textColor={index % 2 === 0 ? colors.color3 : colors.color2}
          style={styles.btn}
          onPress={() => handleUpdate(_id)}
          loading={loading}
          disabled={loading}
        >
          Update
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5,
  },
  text: {
    color: colors.color2,
    fontSize: 16,
    fontWeight: '900',
    marginHorizontal: -20,
    marginTop: -20,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  btn: {
    width: 120,
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default OrdersScreenOrderListItem;
