import { View, StyleSheet, ScrollView } from 'react-native';
import HomeScreenCategoriesButton from './button';
import { colors } from '../../../styles';

const HomeScreenCategories = ({ categoriesArray, setCategory, category }) => {
  const handlePress = (el) => setCategory(el);
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        {categoriesArray.map((el, i) => (
          <HomeScreenCategoriesButton
            key={i}
            btnTitle={el}
            handlePress={() => handlePress(el)}
            btnStyle={{
              // TODO: changes category === el._id
              backgroundColor: category === el ? colors.color1 : colors.color5,
              borderRadius: 100,
              margin: 5,
            }}
            textStyle={{
              fontSize: 12,
              color: category === el ? colors.color2 : 'gray',
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
  },
});
export default HomeScreenCategories;
