import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import LoginScreen from './screens/auth/login';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Group>
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="login" component={LoginScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
