import { StyleSheet, Text, View } from 'react-native';

const AdminProductImagesScreen = ({
  route: {
    params: { _id, images },
  },
}) => {
  console.log(_id, images);
  return (
    <View>
      <Text>AdminProductImagesScreen</Text>
    </View>
  );
};

export default AdminProductImagesScreen;

const styles = StyleSheet.create({});
