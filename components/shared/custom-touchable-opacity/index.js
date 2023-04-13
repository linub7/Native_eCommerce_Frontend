import { TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

const CustomTouchableOpacity = ({
  icon,
  styles,
  textColor,
  btnTitle,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Button icon={icon} style={styles} textColor={textColor}>
        {btnTitle}
      </Button>
    </TouchableOpacity>
  );
};

export default CustomTouchableOpacity;
