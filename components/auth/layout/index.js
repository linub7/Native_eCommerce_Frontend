import { StyleSheet, View } from 'react-native';
import { colors } from '../../../styles';

const CommonAuthLayout = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default CommonAuthLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.color3,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 10,
  },
});
