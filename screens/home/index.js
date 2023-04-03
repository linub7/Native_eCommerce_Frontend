import { StyleSheet, View } from 'react-native';
import { defaultStyle } from '../../styles';
import HeaderComponent from '../../components/shared/header';
import HomeScreenHeading from '../../components/home/heading';
import CustomHomeSearchBar from '../../components/home/search-bar';

const HomeScreen = () => {
  return (
    <View style={defaultStyle}>
      <HeaderComponent />
      <View style={styles.headerContainer}>
        <HomeScreenHeading />
        <CustomHomeSearchBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
});

export default HomeScreen;
