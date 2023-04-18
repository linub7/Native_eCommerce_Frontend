import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../../../../../styles';
import CommonTouchableIcon from '../../../../shared/touchable-icon';

const AdminProductImagesScreenListItem = ({ handleDeleteImage, src, _id }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: src }} style={styles.image} />
      <CommonTouchableIcon
        icon={'delete'}
        size={30}
        iconStyle={styles.iconStyle}
        onPress={() => handleDeleteImage(_id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color2,
    elevation: 5,
    margin: 10,
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    height: 300,
  },
  image: { width: '100%', height: '80%', resizeMode: 'contain' },
  iconStyle: { backgroundColor: colors.color1 },
});

export default AdminProductImagesScreenListItem;
