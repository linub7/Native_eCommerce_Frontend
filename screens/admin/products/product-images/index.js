import { StyleSheet, View } from 'react-native';
import { colors, defaultStyle } from '../../../../styles';
import CommonAuthHeading from '../../../../components/auth/heading';
import HeaderComponent from '../../../../components/shared/header';
import { useState } from 'react';
import AdminProductImagesScreenList from '../../../../components/admin/products/images-list';
import AdminProductImagesScreenImageBox from '../../../../components/admin/products/images-list/image-box';

const loading = false;

const AdminProductImagesScreen = ({
  navigation,
  route: {
    params: { _id: productId, images },
  },
}) => {
  const [imgs, setImgs] = useState(images);
  const [image, setImage] = useState(null);
  const [imageChanged, setImageChanged] = useState(false);

  const handleNavigateToCamera = () =>
    navigation.navigate('camera', { updateProduct: true });

  const handleDeleteImage = (imageId) => {
    console.log('image:', imageId);
    console.log('product:', productId);
  };

  const handleAddImage = () => {};

  return (
    <View style={[defaultStyle, styles.container]}>
      <HeaderComponent back={true} />
      <View style={styles.innerContainer}>
        <CommonAuthHeading heading={'Product Images'} />
      </View>
      <AdminProductImagesScreenList
        imgs={imgs}
        handleDeleteImage={handleDeleteImage}
      />
      <AdminProductImagesScreenImageBox
        image={image}
        handleNavigateToCamera={handleNavigateToCamera}
        handleAddImage={handleAddImage}
        imageChanged={imageChanged}
        loading={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: colors.color5 },
  innerContainer: { paddingTop: 70 },
});

export default AdminProductImagesScreen;
