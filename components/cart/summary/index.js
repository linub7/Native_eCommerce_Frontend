import { StyleSheet, Text, View } from 'react-native';

const CartScreenSummary = ({ itemCount, itemPrice }) => {
  return (
    <View style={styles.rowContainer}>
      <Text>{itemCount} item</Text>
      <Text>${itemPrice}</Text>
    </View>
  );
};

export default CartScreenSummary;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
  },
});
