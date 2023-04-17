import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CommonTouchableIcon from '../touchable-icon';
import { colors } from '../../../styles';
import { Headline } from 'react-native-paper';

const CustomSelectComponent = ({ handleClose, headline, children }) => {
  return (
    <View style={styles.container}>
      <CommonTouchableIcon
        icon={'close'}
        iconStyle={styles.icon}
        onPress={handleClose}
        size={30}
      />
      <Headline style={styles.heading}>{headline}</Headline>
      <ScrollView>{children}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color2,
    position: 'absolute',
    top: 50,
    padding: 35,
    borderRadius: 20,
    width: '90%',
    height: '90%',
    alignSelf: 'center',
    elevation: 5,
  },
  icon: {
    alignSelf: 'flex-end',
    backgroundColor: colors.color1,
  },
  heading: {
    textAlign: 'center',
    marginVertical: 10,
    backgroundColor: colors.color3,
    borderRadius: 5,
    padding: 3,
    color: colors.color2,
  },
});

export default CustomSelectComponent;
