import { View, Text, StyleSheet, ScrollView } from 'react-native';
import HomeScreenProductCard from './card';

const HomeScreenProducts = ({ products }) => {
  const handleAddToCart = (productId, stock) =>
    console.log({ productId, stock });
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {products?.map((prod, index) => (
          <HomeScreenProductCard
            name={prod?.name}
            _id={prod?._id}
            image={prod?.images[0]?.url}
            price={prod?.price}
            stock={prod?.stock}
            index={index}
            handleAddToCart={handleAddToCart}
            key={index}
          />
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreenProducts;
