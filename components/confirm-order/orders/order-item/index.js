import { Image, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { colors } from '../../../../styles';
import CommonTouchableIcon from '../../../shared/touchable-icon';
import { removeFromCartAction } from '../../../../store/slices/cartSlice';

const ConfirmOrderScreenOrderItem = ({
  image,
  name,
  amount,
  quantity,
  product,
}) => {
  const dispatch = useDispatch();

  const handleRemoveItemFromCart = () =>
    dispatch(removeFromCartAction({ product }));
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text>{name}</Text>
      <View style={styles.rowContainer}>
        <Text>{quantity}</Text>
        <Text style={styles.x}>x</Text>
        <Text>${amount}</Text>
        <CommonTouchableIcon
          icon={'delete'}
          size={20}
          iconStyle={styles.icon}
          onPress={handleRemoveItemFromCart}
        />
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
  icon: {
    backgroundColor: colors.color1,
    marginLeft: 10,
    alignSelf: 'center',
  },
});

export default ConfirmOrderScreenOrderItem;
