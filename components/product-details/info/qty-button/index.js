import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../../../styles';
import { Avatar } from 'react-native-paper';

const ProductDetailsScreenInfoButton = ({ icon, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Avatar.Icon icon={icon} size={20} style={styles.qtyButton} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  qtyButton: {
    borderRadius: 5,
    backgroundColor: colors.color5,
    height: 25,
    width: 25,
  },
});

export default ProductDetailsScreenInfoButton;
