import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { colors } from '../../../../styles';

const FooterCustomTouchableOpacity = ({
  handleNavigate,
  activeOpacity,
  icon,
}) => {
  return (
    <TouchableOpacity activeOpacity={activeOpacity} onPress={handleNavigate}>
      <Avatar.Icon
        color={colors.color2}
        size={50}
        style={styles.icon}
        icon={icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: colors.color1,
  },
});

export default FooterCustomTouchableOpacity;
