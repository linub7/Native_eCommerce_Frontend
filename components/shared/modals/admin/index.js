import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import { colors } from '../../../../styles';
import CommonTouchableIcon from '../../touchable-icon';

const AdminModal = ({ handleCloseModal, handleUpdate, handleDelete }) => {
  return (
    <View style={styles.container}>
      <CommonTouchableIcon
        icon={'close'}
        size={25}
        touchStyle={styles.touchStyle}
        iconStyle={styles.closeIcon}
        onPress={handleCloseModal}
      />
      <Text style={styles.text} onPress={handleUpdate}>
        Update
      </Text>
      <Button textColor={colors.color1} onPress={handleDelete}>
        Delete
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    width: 200,
    height: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    zIndex: 100,
    backgroundColor: colors.color2,
    padding: 20,
    borderRadius: 10,
  },
  touchStyle: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeIcon: {
    backgroundColor: colors.color1,
  },
  text: {
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default AdminModal;
