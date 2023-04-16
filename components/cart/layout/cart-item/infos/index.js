import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

const CartScreenLayoutCartItemInfos = ({ name, amount, id }) => {
  const navigation = useNavigation();
  const handleNavigateToProductDetails = (id) =>
    navigation.navigate('product-details', { id });
  return (
    <View style={styles.info}>
      <Text
        numberOfLines={1}
        style={styles.name}
        onPress={() => handleNavigateToProductDetails(id)}
      >
        {name}
      </Text>
      <Text numberOfLines={1} style={styles.amount}>
        ${amount}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    width: '40%',
    paddingHorizontal: 25,
  },
  name: {
    fontSize: 17,
  },
  amount: {
    fontSize: 17,
    fontWeight: '900',
  },
});

export default CartScreenLayoutCartItemInfos;
