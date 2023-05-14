import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { colors, inputStyling } from '../../../../styles';
import CommonAuthInput from '../../../auth/input';

const AdminUpdateProductScreenComponent = ({
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
  handleNavigate,
  handleUpdateProduct,
  loading,
}) => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Button onPress={handleNavigate} textColor={colors.color1}>
          Manage Images
        </Button>
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
          {category}
        </Text>
        <Button
          textColor={colors.color2}
          style={styles.btn}
          onPress={handleUpdateProduct}
          loading={loading}
          disabled={loading}
        >
          Update Product
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
});

export default AdminUpdateProductScreenComponent;
