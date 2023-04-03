import { View } from 'react-native';
import { defaultStyle } from '../../styles';
import HeaderComponent from '../../components/shared/header';
import HomeScreenHeader from '../../components/home/HomeScreenHeader';

const HomeScreen = () => {
  return (
    <View style={defaultStyle}>
      <HeaderComponent />
      <HomeScreenHeader />
    </View>
  );
};

export default HomeScreen;
