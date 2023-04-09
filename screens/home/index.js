import { StyleSheet, View } from 'react-native';
import { defaultStyle } from '../../styles';
import HeaderComponent from '../../components/shared/header';
import HomeScreenHeading from '../../components/home/heading';
import HomeScreenCategories from '../../components/home/categories';
import { useState } from 'react';
import CustomSearchModal from '../../components/shared/modals/search';
import CustomHomeSearchIcon from '../../components/home/search/icon';

const categoriesArray = [
  'Nice',
  'Football',
  'Mens',
  'Helicopter',
  'Volleyball',
];

const products = [
  {
    _id: 'bottle-lmmcalca',
    name: 'Bottle',
    price: 20,
    images: [
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeS1J2KHiDCismfBDSncXO-wqLfddfz3VuPwi3nlav&s',
      },
    ],
  },
  {
    _id: 'camera-lamclamca',
    name: 'Camera',
    price: 2020,
    images: [
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLN0_NvJuLGMVD_HxY2bQ4XgZEiQ4PeH38w715AYBPg&s',
      },
    ],
  },
  {
    _id: 'cream-kancacaal',
    name: 'Health-Cream',
    price: 120,
    images: [
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq8uiBrVAT7UARXvDO9vmbWkLubt1igCNF3v2gvujQ&s',
      },
    ],
  },
  {
    _id: 'Watch-jhhhdakdahhdac',
    name: 'Watch',
    price: 3000,
    images: [
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbD_PUwfdtYND0PnoTrWw4URh0YRdmzJ6bchohYpIm1w&s',
      },
    ],
  },
];

const HomeScreen = () => {
  const [category, setCategory] = useState('');
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  console.log(searchTerm);

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
          <HomeScreenHeading />
          <CustomHomeSearchIcon setActiveSearch={setActiveSearch} />
        </View>
        <HomeScreenCategories
          categoriesArray={categoriesArray}
          setCategory={setCategory}
          category={category}
        />
      </View>
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
