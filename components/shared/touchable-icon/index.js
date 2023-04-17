import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';

const CommonTouchableIcon = ({
  touchStyle,
  iconStyle,
  onPress,
  size,
  icon,
  iconColor,
}) => {
  return (
    <TouchableOpacity style={touchStyle} onPress={onPress}>
      <Avatar.Icon
        icon={icon}
        size={size}
        style={iconStyle}
        color={iconColor}
      />
    </TouchableOpacity>
  );
};

export default CommonTouchableIcon;
