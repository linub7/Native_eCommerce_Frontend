import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  ScrollView,
  BackHandler,
} from 'react-native';
import { colors } from '../../../../styles';
import { Searchbar } from 'react-native-paper';
import CustomSearchItem from '../../../home/search/item';
import { useEffect } from 'react';

const CustomSearchModal = ({
  searchTerm = '',
  setSearchTerm,
  setActiveSearch,
  products = [],
}) => {
  const navigation = useNavigation();

  const handleBackAction = () => {
    setSearchTerm('');
    setActiveSearch(false);
    return true; // only back to home -> without return true with back button app will clos
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackAction);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress');
    };
  }, []);

  const handleClearIconPress = () => setSearchTerm('');
  const handleChangeInput = (term) => setSearchTerm(term);
  const handleToSearchResult = (path) =>
    navigation.navigate('product-details', { id: path });

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
            {products?.map((prod, i) => (
              <CustomSearchItem
                key={i}
                imgSrc={prod?.images[0]?.url}
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
