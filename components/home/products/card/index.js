import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { colors } from '../../../../styles';
import { Button } from 'react-native-paper';
import HomeScreenProductCardHeader from './header';
import HomeScreenProductCardFooter from './footer';

const HomeScreenProductCard = ({
  stock,
  name,
  price,
  image,
  _id,
  handleAddToCart,
  index,
}) => {
  const navigation = useNavigation();

  const handleNavigateToProductDetails = (path) =>
    navigation.navigate('product-details', { id: path });

  return (
    <TouchableOpacity
      onPress={() => handleNavigateToProductDetails(_id)}
      activeOpacity={1}
    >
      <View
        style={[
          styles.container,
          { backgroundColor: index % 2 === 0 ? colors.color1 : colors.color2 },
        ]}
      >
        <Image source={{ uri: image }} style={styles.image} />
        <HomeScreenProductCardHeader index={index} name={name} price={price} />
        <HomeScreenProductCardFooter
          _id={_id}
          index={index}
          handleAddToCart={handleAddToCart}
          stock={stock}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    width: 220,
    height: 400,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    position: 'absolute',
    left: 50,
    top: 105,
  },
});

export default HomeScreenProductCard;
