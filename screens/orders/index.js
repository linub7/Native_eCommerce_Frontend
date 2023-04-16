import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, defaultStyle } from '../../styles';
import HeaderComponent from '../../components/shared/header';
import CustomLoader from '../../components/shared/custom-loader';
import OrdersScreenOrderList from '../../components/orders';
import CommonAuthHeading from '../../components/auth/heading';

const loading = false;

const OrdersScreen = () => {
  return (
    <View style={[defaultStyle, styles.container]}>
      <HeaderComponent back={true} />
      <View style={styles.innerContainer}>
        <CommonAuthHeading heading={'Orders'} />

        {loading ? (
          <View style={{ justifyContent: 'center', marginTop: 100 }}>
            <CustomLoader size={100} color={colors.color3} />
          </View>
        ) : (
          <OrdersScreenOrderList />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color5,
  },
  innerContainer: { paddingTop: 70 },
});

export default OrdersScreen;
