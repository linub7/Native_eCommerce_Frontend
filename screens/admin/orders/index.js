import { StyleSheet, View } from 'react-native';
import { colors, defaultStyle } from '../../../styles';
import HeaderComponent from '../../../components/shared/header';
import CommonAuthHeading from '../../../components/auth/heading';
import CustomLoader from '../../../components/shared/custom-loader';
import OrdersScreenOrderList from '../../../components/orders';

const loading = false;

const AdminOrdersScreen = () => {
  return (
    <View style={[defaultStyle, styles.container]}>
      <HeaderComponent back={true} />
      <View style={styles.innerContainer}>
        <CommonAuthHeading heading={'Admin - All Orders'} />
      </View>
      {loading ? (
        <View style={{ justifyContent: 'center', marginTop: 100 }}>
          <CustomLoader size={100} color={colors.color3} />
        </View>
      ) : (
        <OrdersScreenOrderList />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: colors.color5 },
  innerContainer: { paddingTop: 70 },
});

export default AdminOrdersScreen;
