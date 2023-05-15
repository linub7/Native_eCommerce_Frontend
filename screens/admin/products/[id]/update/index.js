import { StyleSheet, View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';

import { colors, defaultStyle } from '../../../../../styles';
import HeaderComponent from '../../../../../components/shared/header';
import CommonAuthHeading from '../../../../../components/auth/heading';
import CustomLoader from '../../../../../components/shared/custom-loader';
import AdminUpdateProductScreenComponent from '../../../../../components/admin/products/update-product';
import CustomSelectComponent from '../../../../../components/shared/select';
import {
  getProductDetailsFromStoreAction,
  resetUpdateAbleProductAction,
  updateProductAction,
} from '../../../../../store/slices/productSlice';
import { localLoadingStatus } from '../../../../../store/slices/loadingSlice';
import { updateProductInfoHandler } from '../../../../../api/product';

const AdminUpdateProductScreen = ({
  route: {
    params: { id },
  },
  navigation,
}) => {
  const dispatch = useDispatch();
  const { updateAbleProduct } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.category);
  const { token } = useSelector((state) => state.auth);
  const { loading, localLoading } = useSelector((state) => state.loading);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => setIsVisible(true);
  const handleClose = () => setIsVisible(false);

  useEffect(() => {
    handleSetProduct();

    return () => {
      dispatch(resetUpdateAbleProductAction());
      setName('');
      setDescription('');
      setPrice('');
      setStock('');
      setCategory('');
      setCategoryId('');

      setIsVisible(false);
    };
  }, [id, updateAbleProduct]);

  const handleSetProduct = () => {
    dispatch(getProductDetailsFromStoreAction({ productId: id }));
    setName(updateAbleProduct?.name);
    setDescription(updateAbleProduct?.description);
    setPrice(updateAbleProduct?.price?.toString());
    setStock(updateAbleProduct?.stock?.toString());
    setCategory(updateAbleProduct?.category?.name);
    setCategoryId(updateAbleProduct?.category?._id);
  };

  const handleNavigate = () => navigation.navigate('product-images');

  const handleSelectCategory = (cat) => {
    setCategory(cat?.name);
    setCategoryId(cat?._id);
    setIsVisible(false);
  };

  const handleUpdateProduct = async () => {
    dispatch(localLoadingStatus({ status: true }));
    const category = categoryId;
    const { err, data } = await updateProductInfoHandler(
      updateAbleProduct?._id,
      name,
      description,
      stock,
      price,
      category,
      token
    );
    if (err) {
      console.log(err);
      dispatch(localLoadingStatus({ status: false }));
      return Toast.show({
        type: 'error',
        text1: err,
      });
    }
    dispatch(localLoadingStatus({ status: false }));
    dispatch(
      updateProductAction({
        productId: data?.data?.data?._id,
        product: data?.data?.data,
      })
    );
    dispatch(resetUpdateAbleProductAction());
    Toast.show({
      type: 'success',
      text1: 'Product updated successfully.',
    });
    navigation.navigate('admin-panel');
  };

  return (
    <>
      <View style={[defaultStyle, styles.container]}>
        <HeaderComponent back={true} />
        <View style={styles.innerContainer}>
          <CommonAuthHeading heading={'Update Product'} />
        </View>
        {loading ? (
          <View style={{ justifyContent: 'center', marginTop: 100 }}>
            <CustomLoader size={100} color={colors.color3} />
          </View>
        ) : (
          <AdminUpdateProductScreenComponent
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            price={price}
            setPrice={setPrice}
            stock={stock}
            setStock={setStock}
            category={category}
            handleVisible={handleVisible}
            handleNavigate={handleNavigate}
            handleUpdateProduct={handleUpdateProduct}
            loading={localLoading}
          />
        )}
      </View>
      {isVisible && (
        <CustomSelectComponent
          handleClose={handleClose}
          headline={'Select a Category'}
        >
          {categories?.map((cat, index) => (
            <Text
              onPress={() => handleSelectCategory(cat)}
              style={styles.selectText}
              key={index}
            >
              {cat?.name}
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

export default AdminUpdateProductScreen;
