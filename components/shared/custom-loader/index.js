import { StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const CustomLoader = ({ size, color }) => {
  return <ActivityIndicator style={styles.loader} size={size} color={color} />;
};

const styles = StyleSheet.create({
  loader: {
    top: '50%',
    position: 'absolute',
    alignSelf: 'center',
  },
});

export default CustomLoader;
