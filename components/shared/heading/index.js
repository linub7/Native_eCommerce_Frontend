import { View, Text, StyleSheet } from 'react-native';

const CommonScreenHeading = ({ normalText, boldText, cart = false }) => {
  return (
    <View style={cart ? styles.container : ''}>
      <Text style={styles.normalText}>{normalText}</Text>
      <Text style={styles.boldText}>{boldText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    marginLeft: 30,
  },
  normalText: {
    fontSize: 25,
  },
  boldText: {
    fontSize: 25,
    fontWeight: '900',
  },
});

export default CommonScreenHeading;
