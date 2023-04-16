import { StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';
import { colors } from '../../../styles';
import CustomTouchableOpacity from '../../shared/custom-touchable-opacity';

const ProfileScreenChangeAvatar = ({ avatar, handleNavigateToCamera }) => {
  return (
    <>
      <Avatar.Image source={{ uri: avatar }} size={100} style={styles.avatar} />
      <CustomTouchableOpacity
        onPress={handleNavigateToCamera}
        btnTitle={'Change Photo'}
        textColor={colors.color1}
      />
    </>
  );
};

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: colors.color1,
  },
});

export default ProfileScreenChangeAvatar;
