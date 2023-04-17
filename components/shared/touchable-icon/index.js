import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';

const CommonTouchableIcon = ({
  touchStyle,
  iconStyle,
  onPress,
  size,
  icon,
}) => {
  return (
    <TouchableOpacity style={touchStyle} onPress={onPress}>
      <Avatar.Icon icon={icon} size={size} style={iconStyle} />
    </TouchableOpacity>
  );
};

export default CommonTouchableIcon;
