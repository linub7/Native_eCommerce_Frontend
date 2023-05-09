import { useNavigation, useRoute } from '@react-navigation/native';
import CustomHeaderTouchableOpacity from './customHeaderTouchableOpacity';
import { useDispatch } from 'react-redux';
import { clearCartAction } from '../../../store/slices/cartSlice';

const HeaderComponent = ({ back = false, emptyCart = false }) => {
  const navigation = useNavigation();
  const router = useRoute();
  const dispatch = useDispatch();

  const handlePressBack = () => navigation.goBack();
  const handlePressForward = () => navigation.navigate('cart');
  const handleEmptyCart = () => dispatch(clearCartAction());

  return (
    <>
      {back && (
        <CustomHeaderTouchableOpacity
          styles={{ position: 'absolute', left: 20, top: 40, zIndex: 10 }}
          handlePress={handlePressBack}
          icon={'arrow-left'}
          routerName={router?.name}
        />
      )}
      <CustomHeaderTouchableOpacity
        styles={{ position: 'absolute', right: 20, top: 40, zIndex: 10 }}
        handlePress={emptyCart ? handleEmptyCart : handlePressForward}
        icon={emptyCart ? 'delete-outline' : 'cart-outline'}
        routerName={router.name}
      />
    </>
  );
};

export default HeaderComponent;
