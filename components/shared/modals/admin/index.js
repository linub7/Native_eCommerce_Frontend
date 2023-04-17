import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../../../styles';
import { Avatar, Button } from 'react-native-paper';

const AdminModal = ({ handleCloseModal, handleUpdate, handleDelete }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchStyle} onPress={handleCloseModal}>
        <Avatar.Icon icon={'close'} size={25} style={styles.closeIcon} />
      </TouchableOpacity>
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
