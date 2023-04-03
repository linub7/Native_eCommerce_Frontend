import { StyleSheet, View } from 'react-native';
import { defaultStyle } from '../../styles';
import HeaderComponent from '../../components/shared/header';
import HomeScreenHeading from '../../components/home/heading';
import CustomHomeSearchBar from '../../components/home/search-bar';
import HomeScreenCategories from '../../components/home/categories';
import { useState } from 'react';

const HomeScreen = () => {
  const [category, setCategory] = useState('');
  const categoriesArray = [
    'Nice',
    'Football',
    'Mens',
    'Helicopter',
    'Volleyball',
  ];

  return (
    <View style={defaultStyle}>
      <HeaderComponent />
      <View style={styles.headerContainer}>
        <HomeScreenHeading />
        <CustomHomeSearchBar />
      </View>
      <HomeScreenCategories
        categoriesArray={categoriesArray}
        setCategory={setCategory}
        category={category}
      />
    </View>
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
