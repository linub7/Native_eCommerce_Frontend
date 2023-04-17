import { StyleSheet, View } from 'react-native';
import { colors, defaultStyle } from '../../../styles';
import HeaderComponent from '../../../components/shared/header';
import CommonAuthHeading from '../../../components/auth/heading';
import CustomLoader from '../../../components/shared/custom-loader';
import AdminPanelScreenActions from '../../../components/admin/panel/actions';
import AdminPanelScreenProductListHeading from '../../../components/admin/panel/product-list/heading';
import AdminPanelScreenProductList from '../../../components/admin/panel/product-list';
import AdminPanelScreenChart from '../../../components/admin/panel/chart';

const loading = false;

const AdminPanelScreen = () => {
  return (
    <View style={defaultStyle}>
      <HeaderComponent back={true} />
      <View style={styles.innerContainer}>
        <CommonAuthHeading heading={'Admin Panel'} />
      </View>
      {loading ? (
        <CustomLoader size={100} color={colors.color3} />
      ) : (
        <>
          <View style={styles.chart}>
            <AdminPanelScreenChart inStock={12} outOfStock={2} />
          </View>
          <AdminPanelScreenActions />
          <AdminPanelScreenProductListHeading />
          <AdminPanelScreenProductList />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: { paddingTop: 70 },
  chart: {
    backgroundColor: colors.color3,
    borderRadius: 20,
    alignItems: 'center',
  },
});

export default AdminPanelScreen;
