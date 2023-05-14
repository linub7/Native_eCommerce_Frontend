import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';

import { colors } from '../../../../../styles';
import DecisionModal from '../../../../shared/modals/admin';
import { localLoadingStatus } from '../../../../../store/slices/loadingSlice';
import { deleteProductHandler } from '../../../../../api/product';
import { deleteProductAction } from '../../../../../store/slices/productSlice';

const AdminPanelScreenProductListItem = ({
  index,
  _id,
  price,
  stock,
  name,
  imgSrc,
  category,
  token,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleCloseModal = () => setIsModalOpen(false);

  const handleNavigate = (path) => navigation.navigate(path, { id: _id });

  useEffect(() => {
    return () => {
      setIsModalOpen(false);
    };
  }, []);

  const handleDeleteProduct = async () => {
    dispatch(localLoadingStatus({ status: true }));
    const { err, data } = await deleteProductHandler(_id, token);
    if (err) {
      console.log(err);
      dispatch(localLoadingStatus({ status: false }));
      return Toast.show({ type: 'error', text1: err });
    }
    dispatch(localLoadingStatus({ status: false }));
    dispatch(deleteProductAction({ productId: _id }));
    Toast.show({ type: 'success', text1: 'Product deleted successfully.' });
    setIsModalOpen(false);
  };
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => handleNavigate('product-details')}
        onLongPress={() => setIsModalOpen((prev) => !prev)}
      >
        <View
          style={[
            styles.container,
            {
              backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3,
            },
          ]}
        >
          <Image source={{ uri: imgSrc }} style={styles.image} />
          <Text numberOfLines={1} style={styles.price}>
            ${price}
          </Text>
          <Text numberOfLines={1} style={styles.name}>
            {name}
          </Text>
          <Text numberOfLines={1} style={styles.category}>
            {category}
          </Text>
          <Text numberOfLines={1} style={styles.stock}>
            {stock}
          </Text>
        </View>
      </TouchableOpacity>
      {isModalOpen && (
        <DecisionModal
          handleCloseModal={handleCloseModal}
          handleUpdate={() => handleNavigate('update-product')}
          handleDelete={handleDeleteProduct}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 30,
    resizeMode: 'contain',
  },
  price: {
    width: 60,
    color: colors.color2,
  },
  name: {
    maxWidth: 120,
    color: colors.color2,
  },
  category: {
    width: 60,
    color: colors.color2,
  },
  stock: {
    width: 40,
    color: colors.color2,
  },
});

export default AdminPanelScreenProductListItem;
