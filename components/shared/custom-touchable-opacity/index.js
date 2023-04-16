import { TouchableOpacity, Text } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import { colors } from '../../../styles';

const CustomTouchableOpacity = ({
  icon,
  styles,
  textColor,
  btnTitle,
  onPress,
  profile = false,
  reverse = false,
  touchStyle,
  loading = false,
}) => {
  return (
    <TouchableOpacity style={touchStyle} onPress={onPress} disabled={loading}>
      {!profile ? (
        <Button icon={icon} style={styles} textColor={textColor}>
          {btnTitle}
        </Button>
      ) : (
        <>
          <Avatar.Icon
            size={50}
            color={colors.color2}
            style={{ backgroundColor: reverse ? colors.color1 : colors.color3 }}
            icon={icon}
          />
          <Text style={{ color: colors.color2, textAlign: 'center' }}>
            {btnTitle}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default CustomTouchableOpacity;
