import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Headline } from 'react-native-paper';
import OrdersScreenOrderListItem from './order-item';

const orders = [
  {
    _id: 'mcamclamccacaa',
    shippingInfo: {
      address: 'lmlcmalcacacma',
      city: 'CA',
      country: 'US',
      pinCode: 212122111,
    },
    createdAt: '12-2-2023T2343',
    orderStatus: 'Cancelled',
    paymentMethod: 'COD',
    totalAmount: 2000120,
  },
  {
    _id: 'mcamadadclamca',
    shippingInfo: {
      address: 'lmdaadedlcmalcmdsdsdsa',
      city: 'NY',
      country: 'US',
      pinCode: 1214542212121,
    },
    createdAt: '12-2-2021T2343',
    orderStatus: 'Delivered',
    paymentMethod: 'ONLINE',
    totalAmount: 2005400,
  },
  {
    _id: 'mcamadadclamcaqq1212',
    shippingInfo: {
      address: 'lmdaadedlcmalcmacacarreret',
      city: 'NY',
      country: 'US',
      pinCode: 1214542212121,
    },
    createdAt: '12-2-2021T2343',
    orderStatus: 'Delivered',
    paymentMethod: 'ONLINE',
    totalAmount: 2005400,
  },
  {
    _id: 'mcamadadclamcacscsggrtr',
    shippingInfo: {
      address: 'lmdaadedlcmalcma',
      city: 'NY',
      country: 'US',
      pinCode: 1214542212121,
    },
    createdAt: '12-2-2021T2343',
    orderStatus: 'Delivered',
    paymentMethod: 'ONLINE',
    totalAmount: 2005400,
  },
  {
    _id: 'mcamadadclamca98812',
    shippingInfo: {
      address: 'lmdaadedlcmalcma',
      city: 'NY',
      country: 'US',
      pinCode: 1214542212121,
    },
    createdAt: '12-2-2021T2343',
    orderStatus: 'Delivered',
    paymentMethod: 'ONLINE',
    totalAmount: 2005400,
  },
  {
    _id: 'mcamadadclamca',
    shippingInfo: {
      address: 'lmdaadedlcmalcma',
      city: 'NY',
      country: 'US',
      pinCode: 1214542212121,
    },
    createdAt: '12-2-2021T2343',
    orderStatus: 'Delivered',
    paymentMethod: 'ONLINE',
    totalAmount: 2005400,
  },
];
const loading = false;

const OrdersScreenOrderList = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {orders?.length > 0 ? (
          orders?.map((order, index) => (
            <OrdersScreenOrderListItem
              key={index}
              _id={order?._id}
              address={`${order?.shippingInfo?.address}, ${order?.shippingInfo?.city}, ${order?.shippingInfo?.country} ${order?.shippingInfo?.pinCode}`}
              handleUpdate={() => {}}
              loading={loading}
              orderDate={order?.createdAt}
              paymentMethod={order?.paymentMethod}
              totalAmount={order?.totalAmount}
              status={order?.orderStatus}
              index={index}
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
