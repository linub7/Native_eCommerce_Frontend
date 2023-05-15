import { useNavigation } from '@react-navigation/native';
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  ScrollView,
  BackHandler,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Searchbar } from 'react-native-paper';
import { useEffect, useState } from 'react';

import { colors } from '../../../../styles';
import CustomSearchItem from '../../../home/search/item';

const CustomSearchModal = ({
  searchTerm = '',
  setSearchTerm,
  setActiveSearch,
  products = [],
}) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (isFocused) {
      setFilteredProducts([]);
      setSearchTerm('');
    }
    // return () => {
    //   setFilteredProducts([]);
    //   setSearchTerm('');
    // };
  }, [isFocused]);

  const handleBackAction = () => {
    setSearchTerm('');
    setActiveSearch(false);
    setFilteredProducts([]);
    return true; // only back to home -> without return true with back button app will close
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackAction);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress');
    };
  }, []);

  const handleClearIconPress = () => {
    setSearchTerm('');
    setFilteredProducts([]);
  };

  const handleChangeInput = (term) => {
    setSearchTerm(term);
    const searchedProducts = products.filter((prod) =>
      prod?.name.includes(searchTerm)
    );
    setFilteredProducts(searchedProducts);
  };

  const handleToSearchResult = (path) =>
    navigation.navigate('product-details', { id: path });

  const items = filteredProducts?.length > 0 ? filteredProducts : products;

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Searchbar
          placeholder="Search..."
          onChangeText={handleChangeInput}
          value={searchTerm}
          style={styles.searchBar}
          onClearIconPress={handleClearIconPress}
        />
        <ScrollView>
          <View style={styles.resultContainer}>
            {items?.map((prod, i) => (
              <CustomSearchItem
                key={i}
                imgSrc={prod?.photos[0]?.url}
                name={prod?.name}
                price={prod?.price}
                onHandle={() => handleToSearchResult(prod?._id)}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 100,
    backgroundColor: colors.color2,
    padding: 35,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  searchBar: {
    marginTop: 20,
  },
  resultContainer: {
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
});

export default CustomSearchModal;
