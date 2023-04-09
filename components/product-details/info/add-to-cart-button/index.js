import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
import { colors } from '../../../../styles';

const ProductDetailsScreenInfoAddToCartButton = ({ handlePressAddToCart }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={handlePressAddToCart}>
      <Button icon={'cart'} style={styles.button} textColor={colors.color2}>
        Add to Cart
      </Button>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    padding: 5,
    marginVertical: 35,
  },
});
export default ProductDetailsScreenInfoAddToCartButton;
