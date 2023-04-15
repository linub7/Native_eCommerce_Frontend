import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../../styles';

const ForgotPasswordAction = ({ onPress, text }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.color2,
    marginHorizontal: 20,
    marginVertical: 10,
    alignSelf: 'flex-end',
    fontWeight: '100',
  },
});

export default ForgotPasswordAction;
