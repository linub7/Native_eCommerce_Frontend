import { StyleSheet, View } from 'react-native';
import { colors, defaultStyle } from '../../../../styles';
import CommonAuthHeading from '../../../../components/auth/heading';
import HeaderComponent from '../../../../components/shared/header';
import { useEffect, useState } from 'react';
import AdminProductImagesScreenList from '../../../../components/admin/products/images-list';
import AdminProductImagesScreenImageBox from '../../../../components/admin/products/images-list/image-box';

const loading = false;

const AdminProductImagesScreen = ({ navigation, route: { params } }) => {
  const [imgs, setImgs] = useState(params?.images);
  const [image, setImage] = useState(null);
  const [imageChanged, setImageChanged] = useState(false);

  useEffect(() => {
    if (params?.image) {
      setImage(params?.image);
      setImageChanged(true);
    }
  }, [params]);

  const handleNavigateToCamera = () =>
    navigation.navigate('camera', { updateProduct: true });

  const handleDeleteImage = (imageId) => {
    console.log('image:', imageId);
    console.log('product:', params?._id);
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
