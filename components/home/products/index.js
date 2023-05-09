import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';

import HomeScreenProductCard from './card';
import { addToCartAction } from '../../../store/slices/cartSlice';

const HomeScreenProducts = ({ products }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const handleAddToCart = (prod) => {
    if (prod?.stock === 0)
      return Toast.show({ type: 'error', text1: 'Out of Stock' });
    const item = {
      product: prod?._id,
      name: prod?.name,
      price: prod?.price,
      image: prod?.photos[0]?.url,
      stock: prod?.stock,
      quantity: cartItems.find((el) => el.product === prod._id)
        ? cartItems.find((el) => el.product === prod._id).quantity + 1
        : 1,
    };

    dispatch(addToCartAction({ item }));
    Toast.show({ type: 'success', text1: 'Added to Cart' });
  };
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {products?.map((prod, index) => (
          <HomeScreenProductCard
            name={prod?.name}
            _id={prod?._id}
            image={prod?.photos[0]?.url}
            price={prod?.price}
            stock={prod?.stock}
            index={index}
            handleAddToCart={() => handleAddToCart(prod)}
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
