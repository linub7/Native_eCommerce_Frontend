import { StyleSheet, View, Text } from 'react-native';
import { colors, defaultStyle } from '../../../../../styles';
import HeaderComponent from '../../../../../components/shared/header';
import CommonAuthHeading from '../../../../../components/auth/heading';
import CustomLoader from '../../../../../components/shared/custom-loader';
import AdminUpdateProductScreenComponent from '../../../../../components/admin/products/update-product';
import { useState } from 'react';
import CustomSelectComponent from '../../../../../components/shared/select';

const loading = false;
const images = [
  {
    _id: 'ncnakncakncaknckanckanc',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeS1J2KHiDCismfBDSncXO-wqLfddfz3VuPwi3nlav&s',
  },
  {
    _id: 'ncnakncakncaknckanckanaccacac',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLN0_NvJuLGMVD_HxY2bQ4XgZEiQ4PeH38w715AYBPg&s',
  },
  {
    _id: 'ncnakncakncaknckanckancewesdswewrsfddgw',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq8uiBrVAT7UARXvDO9vmbWkLubt1igCNF3v2gvujQ&s',
  },
  {
    _id: 'ncnakncakncaknckanckancewesdswewrsfddgwqgwgybyy',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbD_PUwfdtYND0PnoTrWw4URh0YRdmzJ6bchohYpIm1w&s',
  },
];

const AdminUpdateProductScreen = ({
  route: {
    params: { _id },
  },
  navigation,
}) => {
  const [name, setName] = useState('');
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

  const handleVisible = () => setIsVisible(true);
  const handleClose = () => setIsVisible(false);

  const handleNavigate = () =>
    navigation.navigate('product-images', { _id, images });

  const handleSelectCategory = (cat) => {
    console.log(cat);
    setCategory(cat?.category);
    setCategoryId(cat?._id);
    setIsVisible(false);
  };

  const handleUpdateProduct = () => {};

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

export default AdminUpdateProductScreen;
