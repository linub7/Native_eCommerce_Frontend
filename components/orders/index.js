import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Headline } from 'react-native-paper';
import OrdersScreenOrderListItem from './order-item';
import { useSelector } from 'react-redux';

const loading = false;

const OrdersScreenOrderList = ({ orders, handleUpdateOrder }) => {
  const { userData } = useSelector((state) => state.auth);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {orders?.length > 0 ? (
          orders?.map((order, index) => (
            <OrdersScreenOrderListItem
              key={index}
              _id={order?._id}
              address={`${order?.shippingInfo?.address}, ${order?.shippingInfo?.city}, ${order?.shippingInfo?.country} ${order?.shippingInfo?.pinCode}`}
              handleUpdate={handleUpdateOrder}
              loading={loading}
              orderDate={order?.createdAt}
              paymentMethod={order?.paymentMethod}
              totalAmount={order?.totalAmount}
              status={order?.orderStatus}
              index={index}
              admin={userData?.role === 'admin' ? true : false}
            />
          ))
        ) : (
          <Headline style={styles.headline}>No Orders yet</Headline>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 100,
  },
  headline: {
    textAlign: 'center',
  },
});

export default OrdersScreenOrderList;
