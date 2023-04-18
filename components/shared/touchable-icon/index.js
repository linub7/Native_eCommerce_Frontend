import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';

const CommonTouchableIcon = ({
  touchStyle,
  iconStyle,
  onPress,
  size,
  icon,
  iconColor,
  activeOpacity = 0.9,
}) => {
  return (
    <TouchableOpacity
      style={touchStyle}
      onPress={onPress}
      activeOpacity={activeOpacity}
    >
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
