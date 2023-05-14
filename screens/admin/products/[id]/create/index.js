import { StyleSheet, Text, View } from 'react-native';
import mime from 'mime';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';

import { colors, defaultStyle } from '../../../../../styles';
import HeaderComponent from '../../../../../components/shared/header';
import CommonAuthHeading from '../../../../../components/auth/heading';
import AdminCreateProductScreenComponent from '../../../../../components/admin/products/create-product';
import CustomSelectComponent from '../../../../../components/shared/select';
import { loadingStatus } from '../../../../../store/slices/loadingSlice';
import { addProductHandler } from '../../../../../api/product';
import { addProductAction } from '../../../../../store/slices/productSlice';

const AdminCreateProductScreen = ({ navigation, route: { params } }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('Please select a category');
  const [isVisible, setIsVisible] = useState(false);

  const { categories: categoriesArray } = useSelector(
    (state) => state.category
  );
  const { loading } = useSelector((state) => state.loading);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    setCategories(categoriesArray);
  }, []);

  useEffect(() => {
    if (params?.image) setImage(params?.image);
  }, [params]);

  const handleVisible = () => setIsVisible(true);
  const handleClose = () => setIsVisible(false);

  const handleNavigateToCamera = () =>
    navigation.navigate('camera', { newProduct: true });

  const handleSelectCategory = (cat) => {
    setCategory(cat?.name);
    setCategoryId(cat?._id);
    setIsVisible(false);
  };

  const handleCreateProduct = async () => {
    if (categoryId === '')
      return Toast.show({ type: 'error', text1: 'Please select a category' });
    dispatch(loadingStatus({ status: true }));

    let formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('stock', stock);
    formData.append('category', categoryId);
    formData.append('photos', {
      uri: image,
      type: mime.getType(image),
      name: image?.split('/').pop(),
    });

    const { err, data } = await addProductHandler(formData, token);
    if (err) {
      console.log(err);
      dispatch(loadingStatus({ status: false }));
      return Toast.show({
        type: 'error',
        text1: err,
      });
    }
    dispatch(loadingStatus({ status: false }));
    dispatch(addProductAction({ product: data?.data?.data }));
    Toast.show({
      type: 'success',
      text1: 'Product created successfully.',
    });
    navigation.navigate('admin-panel');
  };
  return (
    <>
      <View style={[defaultStyle, styles.container]}>
        <HeaderComponent back={true} />
        <View style={styles.innerContainer}>
          <CommonAuthHeading heading={'Create Product'} />
        </View>

        <AdminCreateProductScreenComponent
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
          handleNavigateToCamera={handleNavigateToCamera}
          handleCreateProduct={handleCreateProduct}
          image={image}
          loading={loading}
        />
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

export default AdminCreateProductScreen;
