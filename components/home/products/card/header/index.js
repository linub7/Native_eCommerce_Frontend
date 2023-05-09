import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../../../styles';

const HomeScreenProductCardHeader = ({ index, name, price }) => {
  return (
    <View style={styles.info}>
      <Text
        style={[
          styles.name,
          { color: index % 2 === 0 ? colors.color2 : colors.color3 },
        ]}
        numberOfLines={2}
      >
        {name}
      </Text>
      <Text
        style={[
          styles.price,
          { color: index % 2 === 0 ? colors.color2 : colors.color3 },
        ]}
        numberOfLines={2}
      >
        ${price}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  name: {
    fontSize: 25,
    fontWeight: '300',
    width: '60%',
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default HomeScreenProductCardHeader;
