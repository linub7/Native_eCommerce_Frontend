import { Image, StyleSheet, Text, View } from 'react-native';

const ConfirmOrderScreenOrderItem = ({ image, name, amount, quantity }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text>{name}</Text>
      <View style={styles.rowContainer}>
        <Text>{quantity}</Text>
        <Text style={styles.x}>x</Text>
        <Text>${amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 30,
    margin: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  x: {
    marginHorizontal: 10,
  },
});

export default ConfirmOrderScreenOrderItem;
