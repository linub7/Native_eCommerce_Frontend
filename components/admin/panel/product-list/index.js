import { ScrollView, StyleSheet, View } from 'react-native';
import { products } from '../../../../screens/home';
import AdminPanelScreenProductListItem from './item';

const AdminPanelScreenProductList = () => {
  const handleDeleteProduct = (productId) => {
    console.log(productId);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {products?.map((prod, index) => (
          <AdminPanelScreenProductListItem
            key={index}
            index={index}
            price={prod?.price}
            stock={prod?.stock}
            name={prod?.name}
            imgSrc={prod?.images[0].url}
            onPress={() => {}}
            handleDelete={handleDeleteProduct}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default AdminPanelScreenProductList;

const styles = StyleSheet.create({});
