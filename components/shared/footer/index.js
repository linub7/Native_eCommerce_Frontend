import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { colors } from '../../../styles';
import FooterCustomTouchableOpacity from './custom-touchable-opacity';

const CustomFooter = ({ activeRoute = 'home' }) => {
  const navigation = useNavigation();
  const { token } = useSelector((state) => state.auth);

  const isAuthenticated = token !== null ? true : false;

  const handleNavigate = (key) => {
    switch (key) {
      case 0:
        navigation.navigate('home');
        break;
      case 1:
        navigation.navigate('cart');
        break;
      case 2:
        isAuthenticated
          ? navigation.navigate('profile')
          : navigation.navigate('login');
        break;

      default:
        navigation.navigate('home');
        break;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <FooterCustomTouchableOpacity
          activeOpacity={0.8}
          handleNavigate={() => handleNavigate(1)}
          icon={activeRoute === 'cart' ? 'shopping' : 'shopping-outline'}
        />
        <FooterCustomTouchableOpacity
          activeOpacity={0.8}
          handleNavigate={() => handleNavigate(2)}
          icon={
            !isAuthenticated
              ? 'login-variant'
              : activeRoute === 'profile'
              ? 'account'
              : 'account-outline'
          }
        />
      </View>
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <FooterCustomTouchableOpacity
            activeOpacity={0.8}
            handleNavigate={() => handleNavigate(0)}
            icon={activeRoute === 'home' ? 'home' : 'home-outline'}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    borderTopRightRadius: 120,
    borderTopLeftRadius: 120,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  circleContainer: {
    position: 'absolute',
    width: 80,
    height: 80,
    backgroundColor: colors.color2,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    top: -50,
    alignSelf: 'center',
  },
  circle: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomFooter;
