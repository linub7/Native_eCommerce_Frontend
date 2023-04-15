import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';

import HomeScreen from './screens/home';
import LoginScreen from './screens/auth/login';
import CartScreen from './screens/cart';
import ProfileScreen from './screens/profile';
import ProductDetailsScreen from './screens/product-details';
import ConfirmOrderScreen from './screens/confirm-order';
import PaymentScreen from './screens/payment';
import ForgotPasswordScreen from './screens/auth/forgot-password';
import RegisterScreen from './screens/auth/register';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Group>
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="profile" component={ProfileScreen} />
          <Stack.Screen
            name="product-details"
            component={ProductDetailsScreen}
          />
          <Stack.Screen name="cart" component={CartScreen} />
          <Stack.Screen name="confirm-order" component={ConfirmOrderScreen} />
          <Stack.Screen name="payment" component={PaymentScreen} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="register" component={RegisterScreen} />
          <Stack.Screen
            name="forgot-password"
            component={ForgotPasswordScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
      <Toast position="top" />
    </NavigationContainer>
  );
};

export default Main;
