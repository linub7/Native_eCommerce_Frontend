import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';

import { colors } from '../../../../../styles';

const HomeScreenProductCardFooter = ({
  index,
  handleAddToCart,
  _id,
  stock,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.addToCartButton,
        {
          backgroundColor: index % 2 === 0 ? colors.color2 : colors.color3,
        },
      ]}
    >
      <Button
        textColor={index % 2 === 0 ? colors.color1 : colors.color2}
        onPress={() => handleAddToCart(_id, stock)}
      >
        Add to Cart
      </Button>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addToCartButton: {
    borderRadius: 0,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    width: '100%',
    paddingVertical: 5,
  },
});

export default HomeScreenProductCardFooter;
