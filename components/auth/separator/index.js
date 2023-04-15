import { StyleSheet, Text } from 'react-native';
import { colors } from '../../../styles';

const CommonAuthSeparator = ({ label }) => {
  return <Text style={styles.separator}>{label}</Text>;
};

const styles = StyleSheet.create({
  separator: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '100',
    color: colors.color2,
  },
});

export default CommonAuthSeparator;
