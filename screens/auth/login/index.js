import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('home')} />
    </View>
  );
};

export default LoginScreen;
