import { ScrollView, StyleSheet, View } from 'react-native';

import AdminPanelScreenProductListItem from './item';

const AdminPanelScreenProductList = ({ products, token }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {products?.map((prod, index) => (
          <AdminPanelScreenProductListItem
            key={index}
            _id={prod?._id}
            index={index}
            price={prod?.price}
            stock={prod?.stock}
            name={prod?.name}
            imgSrc={
              prod?.photos[0]?.url !== undefined
                ? prod?.photos[0].url
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png'
            }
            category={prod?.category?.name}
            token={token}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default AdminPanelScreenProductList;

const styles = StyleSheet.create({});
