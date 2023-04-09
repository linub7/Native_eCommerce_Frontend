import { StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

import ProductDetailsScreenInfoButton from './qty-button';
import { colors } from '../../../styles';
import ProductDetailsScreenInfoAddToCartButton from './add-to-cart-button';

const ProductDetailsScreenInfo = ({
  name,
  description,
  quantity,
  price,
  setQuantity,
  stock,
}) => {
  const handleIncreaseQty = () => {
    if (quantity >= stock) return;
    setQuantity((prev) => prev + 1);
  };
  const handleDecreaseQty = () => {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  };

  const handlePressAddToCart = () => {
    if (stock === 0)
      return Toast.show({
        type: 'error',
        text1: 'Out of Stock',
      });
    Toast.show({ type: 'success', text1: 'Added to Cart' });
  };

  return (
    <View style={styles.infoContainer}>
      <Text numberOfLines={2} style={styles.name}>
        {name}
      </Text>
      <Text style={styles.price}>${price}</Text>
      <Text style={styles.description} numberOfLines={8}>
        {description}
      </Text>
      <View style={styles.rowContainer}>
        <Text style={styles.quantity1}>Quantity</Text>
        <View style={styles.qtyActionContainer}>
          <ProductDetailsScreenInfoButton
            icon={'minus'}
            handlePress={handleDecreaseQty}
          />
          <Text style={styles.quantity2}>{quantity}</Text>
          <ProductDetailsScreenInfoButton
            icon={'plus'}
            handlePress={handleIncreaseQty}
          />
        </View>
      </View>
      <ProductDetailsScreenInfoAddToCartButton
        handlePressAddToCart={handlePressAddToCart}
      />
    </View>
  );
};

export default ProductDetailsScreenInfo;

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: colors.color2,
    padding: 35,
    flex: 1,
    marginTop: -380,
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
  },
  name: {
    fontSize: 25,
  },
  price: {
    fontSize: 18,
    fontWeight: '900',
  },
  description: {
    letterSpacing: 1,
    lineHeight: 20,
    marginVertical: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  quantity1: {
    color: colors.color3,
    fontWeight: '100',
  },
  qtyActionContainer: {
    width: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantity2: {
    backgroundColor: colors.color4,
    height: 25,
    width: 25,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color5,
  },
});
