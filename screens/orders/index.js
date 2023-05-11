import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import { useEffect, useState } from 'react';

import { colors, defaultStyle } from '../../styles';
import HeaderComponent from '../../components/shared/header';
import CustomLoader from '../../components/shared/custom-loader';
import OrdersScreenOrderList from '../../components/orders';
import CommonAuthHeading from '../../components/auth/heading';
import { loadingStatus } from '../../store/slices/loadingSlice';
import { getMyAllOrdersHandler } from '../../api/order';

const OrdersScreen = () => {
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.loading);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    handleGetUserOrders();

    return () => {
      setOrders([]);
    };
  }, []);

  const handleGetUserOrders = async () => {
    dispatch(loadingStatus({ status: true }));
    const { err, data } = await getMyAllOrdersHandler(token);
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
  return (
    <View style={[defaultStyle, styles.container]}>
      <HeaderComponent back={true} />
      <View style={styles.innerContainer}>
        <CommonAuthHeading heading={'Orders'} />

        {loading ? (
          <View style={{ justifyContent: 'center', marginTop: 100 }}>
            <CustomLoader size={100} color={colors.color3} />
          </View>
        ) : (
          <OrdersScreenOrderList orders={orders} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color5,
  },
  innerContainer: { paddingTop: 70 },
});

export default OrdersScreen;
