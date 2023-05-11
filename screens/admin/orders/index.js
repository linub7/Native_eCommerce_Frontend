import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

import { colors, defaultStyle } from '../../../styles';
import HeaderComponent from '../../../components/shared/header';
import CommonAuthHeading from '../../../components/auth/heading';
import CustomLoader from '../../../components/shared/custom-loader';
import OrdersScreenOrderList from '../../../components/orders';
import { loadingStatus } from '../../../store/slices/loadingSlice';
import { getAllUsersOrderHandler } from '../../../api/order';
import { useEffect } from 'react';

const AdminOrdersScreen = () => {
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.loading);
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
    console.log('update order: ', id);
  };
  return (
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
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: colors.color5 },
  innerContainer: { paddingTop: 70 },
});

export default AdminOrdersScreen;
