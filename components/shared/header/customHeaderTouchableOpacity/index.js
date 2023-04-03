import { TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { colors } from '../../../../styles';

const CustomHeaderTouchableOpacity = ({
  styles,
  handlePress,
  icon,
  routerName,
}) => {
  return (
    <TouchableOpacity style={styles} onPress={handlePress}>
      <Avatar.Icon
        style={{ backgroundColor: 'transparent' }}
        icon={icon}
        color={routerName === 'product-details' ? colors.color2 : colors.color3}
      />
    </TouchableOpacity>
  );
};

export default CustomHeaderTouchableOpacity;
