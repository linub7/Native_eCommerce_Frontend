import { Image, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

import CommonTouchableIcon from '../../../../shared/touchable-icon';
import { colors } from '../../../../../styles';

const AdminProductImagesScreenImageBox = ({
  image,
  handleNavigateToCamera,
  loading,
  handleAddImage,
  imageChanged,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.rowContainer}>
        <CommonTouchableIcon
          icon={'camera'}
          size={30}
          iconColor={colors.color3}
          iconStyle={styles.iconStyle}
          onPress={handleNavigateToCamera}
          activeOpacity={0.8}
        />
      </View>
      <Button
        style={styles.btn}
        textColor={colors.color2}
        loading={loading}
        onPress={handleAddImage}
        disabled={loading || !imageChanged}
      >
        Add Image
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.color3,
  },
  image: {
    backgroundColor: colors.color2,
    width: 100,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  rowContainer: { flexDirection: 'row', justifyContent: 'center' },
  iconStyle: { backgroundColor: colors.color2, margin: 10 },
  btn: { backgroundColor: colors.color1, padding: 6 },
});

export default AdminProductImagesScreenImageBox;
