import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { useEffect } from 'react';

import { colors, defaultStyle } from '../../../styles';
import HeaderComponent from '../../../components/shared/header';
import CommonAuthHeading from '../../../components/auth/heading';
import CustomLoader from '../../../components/shared/custom-loader';
import AdminPanelScreenActions from '../../../components/admin/panel/actions';
import AdminPanelScreenProductListHeading from '../../../components/admin/panel/product-list/heading';
import AdminPanelScreenProductList from '../../../components/admin/panel/product-list';
import AdminPanelScreenChart from '../../../components/admin/panel/chart';
import { loadingStatus } from '../../../store/slices/loadingSlice';
import { getAllAdminProductsHandler } from '../../../api/product';
import { getAllAdminProductsAction } from '../../../store/slices/productSlice';

const AdminPanelScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.loading);
  const { token } = useSelector((state) => state.auth);
  const { products, inStock, outOfStock } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    handleGetAllAdminProducts();

    return () => {};
  }, []);

  const handleGetAllAdminProducts = async () => {
    dispatch(loadingStatus({ status: true }));
    const { err, data } = await getAllAdminProductsHandler(token);
    if (err) {
      console.log(err);
      dispatch(loadingStatus({ status: false }));
      return Toast.show({
        type: 'error',
        text1: err,
      });
    }
    dispatch(loadingStatus({ status: false }));
    dispatch(
      getAllAdminProductsAction({
        products: data?.data?.data?.products,
        inStock: data?.data?.data?.inStock,
        outOfStock: data?.data?.data?.outOfStock,
      })
    );
  };

  return (
    <View style={defaultStyle}>
      <HeaderComponent back={true} />
      <View style={styles.innerContainer}>
        <CommonAuthHeading heading={'Admin Panel'} />
      </View>
      {loading ? (
        <CustomLoader size={100} color={colors.color3} />
      ) : (
        <>
          <View style={styles.chart}>
            <AdminPanelScreenChart inStock={inStock} outOfStock={outOfStock} />
          </View>
          <AdminPanelScreenActions />
          <AdminPanelScreenProductListHeading />
          <AdminPanelScreenProductList products={products} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: { paddingTop: 70 },
  chart: {
    backgroundColor: colors.color3,
    borderRadius: 20,
    alignItems: 'center',
  },
});

export default AdminPanelScreen;
