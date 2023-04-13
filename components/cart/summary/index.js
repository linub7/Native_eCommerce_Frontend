import { StyleSheet, Text, View } from 'react-native';

const CartScreenSummary = () => {
  return (
    <View style={styles.rowContainer}>
      <Text>5 Items</Text>
      <Text>$5</Text>
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
