import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { colors } from '../../../styles';

const CommonAuthButton = ({
  btnTitle,
  onPress,
  disabled,
  textColor,
  loading,
}) => {
  return (
    <Button
      loading={loading}
      textColor={textColor}
      style={styles.btn}
      onPress={onPress}
      disabled={disabled}
    >
      {btnTitle}
    </Button>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.color1,
    margin: 20,
    padding: 6,
  },
});

export default CommonAuthButton;
