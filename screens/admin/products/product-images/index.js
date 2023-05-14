import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import mime from 'mime';
import Toast from 'react-native-toast-message';

import { colors, defaultStyle } from '../../../../styles';
import CommonAuthHeading from '../../../../components/auth/heading';
import HeaderComponent from '../../../../components/shared/header';
import AdminProductImagesScreenList from '../../../../components/admin/products/images-list';
import AdminProductImagesScreenImageBox from '../../../../components/admin/products/images-list/image-box';
import {
  loadingStatus,
  localLoadingStatus,
} from '../../../../store/slices/loadingSlice';
import {
  addProductImageHandler,
  deleteProductImageHandler,
} from '../../../../api/product';
import {
  resetUpdateAbleProductAction,
  updateProductAction,
} from '../../../../store/slices/productSlice';

const AdminProductImagesScreen = ({ navigation, route: { params } }) => {
  const [imgs, setImgs] = useState([]);
  const [image, setImage] = useState(null);
  const [imageChanged, setImageChanged] = useState(false);

  const { loading, localLoading } = useSelector((state) => state.loading);
  const { token } = useSelector((state) => state.auth);
  const { updateAbleProduct } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    setImgs(updateAbleProduct.photos);
  }, [updateAbleProduct]);

  useEffect(() => {
    if (params?.image) {
      setImage(params?.image);
      setImageChanged(true);
    }
  }, [params]);

  const handleNavigateToCamera = () =>
    navigation.navigate('camera', { updateProduct: true });

  const handleDeleteImage = async (imageId) => {
    dispatch(localLoadingStatus({ status: true }));
    const { err, data } = await deleteProductImageHandler(
      updateAbleProduct?._id,
      imageId,
      token
    );
    if (err) {
      dispatch(localLoadingStatus({ status: false }));
      console.log(err);
      return Toast.show({
        type: 'success',
        text1: err,
      });
    }
    dispatch(localLoadingStatus({ status: false }));
    setImgs([]);
    dispatch(
      updateProductAction({
        productId: data?.data?.data?._id,
        product: data?.data?.data,
      })
    );
    dispatch(resetUpdateAbleProductAction());
    Toast.show({
      type: 'success',
      text1: 'image deleted successfully.',
    });
    navigation.navigate('admin-panel');
  };

  const handleAddImage = async () => {
    dispatch(loadingStatus({ status: true }));
    let formData = new FormData();
    formData.append('photos', {
      uri: image,
      type: mime.getType(image),
      name: image?.split('/').pop(),
    });

    const { err, data } = await addProductImageHandler(
      updateAbleProduct?._id,
      formData,
      token
    );
    if (err) {
      console.log(err);
      dispatch(loadingStatus({ status: false }));
      return Toast.show({
        type: 'error',
        text1: err,
      });
    }
    setImgs((prev) => [...prev, data?.data?.data?.photos]);
    dispatch(loadingStatus({ status: false }));
    dispatch(
      updateProductAction({
        productId: data?.data?.data?._id,
        product: data?.data?.data,
      })
    );
    dispatch(resetUpdateAbleProductAction());
    Toast.show({
      type: 'success',
      text1: 'image added successfully.',
    });
    navigation.navigate('admin-panel');
  };

  return (
    <View style={[defaultStyle, styles.container]}>
      <HeaderComponent back={true} />
      <View style={styles.innerContainer}>
        <CommonAuthHeading heading={'Product Images'} />
      </View>
      <AdminProductImagesScreenList
        imgs={imgs}
        handleDeleteImage={handleDeleteImage}
        localLoading={localLoading}
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
