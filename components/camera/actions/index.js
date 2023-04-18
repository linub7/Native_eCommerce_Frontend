import { StyleSheet, View } from 'react-native';
import CommonTouchableIcon from '../../shared/touchable-icon';
import { colors } from '../../../styles';

const CameraScreenActions = ({
  handleOpenImagePicker,
  handleCameraFlip,
  handleTapPicture,
}) => {
  return (
    <View style={styles.container}>
      <CommonTouchableIcon
        icon={'image'}
        onPress={handleOpenImagePicker}
        size={40}
        iconStyle={styles.icon}
        iconColor={colors.color2}
      />
      <CommonTouchableIcon
        icon={'camera'}
        onPress={handleTapPicture}
        size={40}
        iconStyle={styles.icon}
        iconColor={colors.color2}
      />
      <CommonTouchableIcon
        icon={'camera-flip'}
        onPress={handleCameraFlip}
        size={40}
        iconStyle={styles.icon}
        iconColor={colors.color2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    bottom: 10,
    width: '100%',
    justifyContent: 'space-evenly',
    position: 'absolute',
  },
  icon: {
    backgroundColor: colors.color1,
  },
});

export default CameraScreenActions;
