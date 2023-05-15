import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import Toast from 'react-native-toast-message';

import { colors, defaultStyle } from '../../../styles';
import HeaderComponent from '../../../components/shared/header';
import CommonAuthHeading from '../../../components/auth/heading';
import CustomLoader from '../../../components/shared/custom-loader';
import OrdersScreenOrderList from '../../../components/orders';
import {
  loadingStatus,
  localLoadingStatus,
} from '../../../store/slices/loadingSlice';
import {
  getAllUsersOrderHandler,
  updateUserOrderStatusHandler,
} from '../../../api/order';
import CustomSelectComponent from '../../../components/shared/select';
import { ORDERS_STATUSES } from '../../../constants';

const AdminOrdersScreen = () => {
  const [orders, setOrders] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();
  const { loading, localLoading } = useSelector((state) => state.loading);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    handleGetAllOrders();

    return () => {
      setOrders([]);
    };
  }, []);

  const handleGetAllOrders = async () => {
    dispatch(loadingStatus({ status: true }));
    const { err, data } = await getAllUsersOrderHandler(token);
    if (err) {
      console.log(err);
      dispatch(loadingStatus({ status: false }));
      return Toast.show({
        type: 'error',
        text1: err,
      });
    }
    dispatch(loadingStatus({ status: false }));
    setOrders(data?.data?.data);
  };

  const handleUpdateOrder = (id) => {
    setIsVisible(true);
    setOrderId(id);
  };

  const handleClose = () => {
    setIsVisible(false);
    setOrderId('');
    setStatus('');
  };

  const handleSelectStatus = (status) => setStatus(status);

  const handleUpdateOrderStatus = async () => {
    dispatch(localLoadingStatus({ status: true }));
    const orderStatus = status;
    const { err, data } = await updateUserOrderStatusHandler(
      orderId,
      orderStatus,
      token
    );

    if (err) {
      console.log(err);
      dispatch(localLoadingStatus({ status: false }));
      return Toast.show({ type: 'error', text1: err });
    }
    dispatch(localLoadingStatus({ status: false }));
    const idx = orders.findIndex((order) => order?._id.toString() === orderId);
    orders[idx] = data?.data?.data;
    setOrderId('');
    setIsVisible(false);
    setStatus('');
    Toast.show({
      type: 'success',
      text1: 'Order Status updated successfully.',
    });
  };

  return (
    <>
      <View style={[defaultStyle, styles.container]}>
        <HeaderComponent back={true} />
        <View style={styles.innerContainer}>
          <CommonAuthHeading heading={'Admin - All Orders'} />
        </View>
        {loading ? (
          <View style={{ justifyContent: 'center', marginTop: 100 }}>
            <CustomLoader size={100} color={colors.color3} />
          </View>
        ) : (
          <OrdersScreenOrderList
            orders={orders}
            handleUpdateOrder={handleUpdateOrder}
          />
        )}
      </View>
      {isVisible && (
        <CustomSelectComponent
          handleClose={handleClose}
          headline={'Select Status'}
          btnTitle="Update Order Status"
          disabled={status === '' || localLoading}
          loading={localLoading}
          isVisibleButton={true}
          onPress={handleUpdateOrderStatus}
        >
          {ORDERS_STATUSES?.map((status, index) => (
            <Text
              onPress={() => handleSelectStatus(status)}
              style={styles.selectText}
              key={index}
            >
              {status}
            </Text>
          ))}
        </CustomSelectComponent>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: colors.color5 },
  innerContainer: { paddingTop: 70 },
  selectText: {
    fontSize: 17,
    fontWeight: '300',
    textTransform: 'uppercase',
    marginVertical: 10,
  },
});

export default AdminOrdersScreen;
