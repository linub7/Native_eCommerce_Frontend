import { StyleSheet, Text, View } from 'react-native';
import { colors, defaultStyle } from '../../../../../styles';
import HeaderComponent from '../../../../../components/shared/header';
import CommonAuthHeading from '../../../../../components/auth/heading';
import CustomLoader from '../../../../../components/shared/custom-loader';
import AdminCreateProductScreenComponent from '../../../../../components/admin/products/create-product';
import { useEffect, useState } from 'react';
import CustomSelectComponent from '../../../../../components/shared/select';

const loading = false;
const AdminCreateProductScreen = ({ navigation, route: { params } }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('Sport');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([
    {
      category: 'Laptop',
      _id: 'amclamcla',
    },
    { category: 'Sport', _id: 'mlmcalmcajt' },
    { category: 'Clothes', _id: 'mlmcacarcalmcajt' },
  ]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (params?.image) setImage(params?.image);
  }, [params]);

  const handleVisible = () => setIsVisible(true);
  const handleClose = () => setIsVisible(false);

  const handleNavigateToCamera = () =>
    navigation.navigate('camera', { newProduct: true });

  const handleSelectCategory = (cat) => {
    console.log(cat);
    setCategory(cat?.category);
    setCategoryId(cat?._id);
    setIsVisible(false);
  };

  const handleCreateProduct = () => {};
  return (
    <>
      <View style={[defaultStyle, styles.container]}>
        <HeaderComponent back={true} />
        <View style={styles.innerContainer}>
          <CommonAuthHeading heading={'Create Product'} />
        </View>
        {loading ? (
          <View style={{ justifyContent: 'center', marginTop: 100 }}>
            <CustomLoader size={100} color={colors.color3} />
          </View>
        ) : (
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
              {cat?.category}
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
