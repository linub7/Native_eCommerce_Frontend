import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { colors } from '../../../../styles';
import { Headline } from 'react-native-paper';

const CustomSearchItem = ({ imgSrc, price, name, onHandle }) => {
  return (
    <TouchableOpacity onPress={onHandle}>
      <View style={styles.container}>
        <Image
          source={{
            uri: imgSrc,
          }}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text numberOfLines={1}>{name}</Text>
          <Headline style={styles.price} numberOfLines={1}>
            ${price}
          </Headline>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.color2,
    elevation: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginVertical: 30,
  },
  image: {
    width: 80,
    height: 80,
    position: 'absolute',
    resizeMode: 'contain',
    top: -15,
    left: 10,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  info: {
    width: '80%',
    paddingHorizontal: 30,
  },
  price: {
    fontWeight: 900,
  },
});

export default CustomSearchItem;
