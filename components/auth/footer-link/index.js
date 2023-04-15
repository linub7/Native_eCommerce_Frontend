import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../../styles';

const CommonAuthFooterLink = ({ onPress, label }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Text style={styles.link}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CommonAuthFooterLink;

const styles = StyleSheet.create({
  link: {
    alignSelf: 'center',
    color: colors.color2,
    fontSize: 18,
    textTransform: 'uppercase',
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
