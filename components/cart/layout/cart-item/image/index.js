import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../../../../../styles';

const CartScreenLayoutCartItemImage = ({ index, imgSrc }) => {
  return (
    <View
      style={[
        styles.imageContainer,
        { backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3 },
      ]}
    >
      <Image source={{ uri: imgSrc }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '40%',
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
  image: {
    width: 200,
    height: '100%',
    resizeMode: 'contain',
    top: '-20%',
    left: '10%',
  },
});

export default CartScreenLayoutCartItemImage;
