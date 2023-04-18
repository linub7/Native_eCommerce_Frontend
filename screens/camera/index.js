import { StyleSheet, Text, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import CameraScreenActions from '../../components/camera/actions';
import * as ImagePicker from 'expo-image-picker';

const CameraScreen = ({ navigation, route: { params } }) => {
  const [camera, setCamera] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);

  const handleCameraFlip = () =>
    setType((prevType) =>
      prevType === CameraType.back ? CameraType.front : CameraType.back
    );

  const handleOpenImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult)
      return alert('Permission to access gallery is required');

    const data = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (params?.newProduct)
      return navigation.navigate('new-product', {
        image: data?.assets[0]?.uri,
      });

    if (params?.updateProduct)
      return navigation.navigate('product-images', {
        image: data?.assets[0]?.uri,
      });

    if (params?.updateProfile)
      return navigation.navigate('profile', {
        image: data?.assets[0]?.uri,
      });
  };

  const handleTapPicture = (params) => {};

  return (
    <View style={styles.container}>
      <Camera
        type={type}
        style={styles.camera}
        ratio="1:1"
        ref={(e) => setCamera(e)}
      />
      <CameraScreenActions
        handleCameraFlip={handleCameraFlip}
        handleOpenImagePicker={handleOpenImagePicker}
        handleTapPicture={handleTapPicture}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: { flex: 1, aspectRatio: 1 },
});

export default CameraScreen;
