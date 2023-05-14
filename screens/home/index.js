import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { Button } from 'react-native';

import { defaultStyle } from '../../styles';
import HeaderComponent from '../../components/shared/header';
import HomeScreenCategories from '../../components/home/categories';
import CustomSearchModal from '../../components/shared/modals/search';
import CustomHomeSearchIcon from '../../components/home/search/icon';
import HomeScreenProducts from '../../components/home/products';
import CustomFooter from '../../components/shared/footer';
import CommonScreenHeading from '../../components/shared/heading';
import {
  loadingStatus,
  localLoadingStatus,
} from '../../store/slices/loadingSlice';
import { getAllProductsHandler } from '../../api/product';
import { getAllProductsAction } from '../../store/slices/productSlice';
import { getAllCategoriesHandler } from '../../api/category';
import { getAllCategoriesAction } from '../../store/slices/categorySlice';

const HomeScreen = () => {
  const [category, setCategory] = useState('');
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.loading);

  useEffect(() => {
    handleGetAllProducts();
    handleGetAllCategories();
  }, []);

  const handleGetAllProducts = async () => {
    dispatch(loadingStatus({ status: true }));
    const { err, data } = await getAllProductsHandler();
    if (err) {
      console.log(err);
      dispatch(loadingStatus({ status: false }));
      return Toast.show({
        type: 'error',
        text1: err,
      });
    }
    dispatch(getAllProductsAction({ products: data?.data?.data }));
    dispatch(loadingStatus({ status: false }));
  };

  const handleGetAllCategories = async () => {
    dispatch(loadingStatus({ status: true }));
    const { err, data } = await getAllCategoriesHandler();
    if (err) {
      console.log(err);
      dispatch(loadingStatus({ status: false }));
      return Toast.show({
        type: 'error',
        text1: err,
      });
    }
    dispatch(getAllCategoriesAction({ categories: data?.data?.data }));
    dispatch(loadingStatus({ status: false }));
  };

  const { products } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.category);

  const handleResetLoading = () => {
    dispatch(loadingStatus({ status: false }));
    dispatch(localLoadingStatus({ status: false }));
  };

  return (
    <>
      {activeSearch && (
        <CustomSearchModal
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}
      <View style={defaultStyle}>
        <HeaderComponent />

        <View style={styles.headerContainer}>
          <CommonScreenHeading
            normalText={'Our'}
            boldText={'Products'}
            home={true}
          />
          <CustomHomeSearchIcon setActiveSearch={setActiveSearch} />
        </View>
        <HomeScreenCategories
          categoriesArray={categories?.map((el) => el.name)}
          setCategory={setCategory}
          category={category}
        />

        <HomeScreenProducts products={products} />
      </View>
      <Button title="Reset Loading" onPress={handleResetLoading} />
      {/* <CustomFooter activeRoute="home" /> */}
      {loading === false && <CustomFooter activeRoute="home" />}
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
});

export default HomeScreen;
