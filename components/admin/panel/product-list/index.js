import { ScrollView, StyleSheet, View } from 'react-native';
import { products } from '../../../../screens/home';
import AdminPanelScreenProductListItem from './item';
import { useNavigation } from '@react-navigation/native';
import DecisionModal from '../../../shared/modals/admin';
import { useState } from 'react';

const AdminPanelScreenProductList = () => {
  const navigation = useNavigation();

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
            imgSrc={prod?.images[0].url}
            category={prod?.category}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default AdminPanelScreenProductList;

const styles = StyleSheet.create({});
