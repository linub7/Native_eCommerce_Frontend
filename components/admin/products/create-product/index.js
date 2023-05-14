import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import CommonAuthInput from '../../../auth/input';
import { colors, inputStyling } from '../../../../styles';
import CommonTouchableIcon from '../../../shared/touchable-icon';

const AdminCreateProductScreenComponent = ({
  name,
  setName,
  description,
  setDescription,
  price,
  setPrice,
  stock,
  setStock,
  category,
  handleVisible,
  handleCreateProduct,
  image,
  handleNavigateToCamera,
  loading,
}) => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Avatar.Image
            size={80}
            style={styles.img}
            source={{ uri: image ? image : null }}
          />
          <CommonTouchableIcon
            icon={'camera'}
            onPress={handleNavigateToCamera}
            size={30}
            iconColor={colors.color3}
            iconStyle={styles.iconStyle}
          />
        </View>
        <CommonAuthInput
          color={colors.color1}
          placeholder={'name'}
          value={name}
          onChangeText={setName}
        />
        <CommonAuthInput
          color={colors.color1}
          placeholder={'description'}
          value={description}
          onChangeText={setDescription}
        />
        <CommonAuthInput
          color={colors.color1}
          placeholder={'price'}
          value={price}
          onChangeText={setPrice}
          keyboardType="number-pad"
        />
        <CommonAuthInput
          color={colors.color1}
          placeholder={'stock'}
          value={stock}
          onChangeText={setStock}
          keyboardType="number-pad"
        />
        <Text style={[inputStyling, styles.category]} onPress={handleVisible}>
          {category !== '' ? category : 'Tap to Select a Category'}
        </Text>
        <Button
          textColor={colors.color2}
          style={styles.btn}
          onPress={handleCreateProduct}
          loading={loading}
          disabled={loading || !name || !description || !stock || !price}
        >
          Create Product
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    padding: 20,
    elevation: 20,
    borderRadius: 10,
    backgroundColor: colors.color3,
  },
  container: {
    justifyContent: 'center',
    height: 650,
  },
  category: {
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 3,
  },
  btn: {
    backgroundColor: colors.color1,
    margin: 20,
    padding: 6,
  },
  imgContainer: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 20,
  },
  img: { backgroundColor: colors.color1 },
  iconStyle: {
    backgroundColor: colors.color2,
    position: 'absolute',
    bottom: 0,
    right: -5,
  },
});

export default AdminCreateProductScreenComponent;
