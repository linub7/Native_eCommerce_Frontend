import { StyleSheet, Text, View } from 'react-native';

const ConfirmOrderScreenPriceTag = ({ heading, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <Text>${value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 30,
  },
  heading: {
    fontWeight: '800',
  },
});

export default ConfirmOrderScreenPriceTag;
