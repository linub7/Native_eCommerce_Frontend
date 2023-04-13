import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { cartItems } from '../../../screens/cart';
import ConfirmOrderScreenOrderItem from './order-item';

const ConfirmOrderScreenOrders = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {cartItems.map((el, index) => (
          <ConfirmOrderScreenOrderItem
            key={index}
            image={el.image}
            name={el.name}
            amount={el.price}
            quantity={el.quantity}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingLeft: 30,
    flex: 1,
  },
});

export default ConfirmOrderScreenOrders;
