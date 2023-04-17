import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../styles';
import AdminCategoriesScreenListItem from './item';

const AdminCategoriesScreenList = ({ categories }) => {
  const handleDeleteCategory = (id) => {
    console.log('delete category', id);
  };
  return (
    <ScrollView style={styles.container}>
      {categories?.map((category, index) => (
        <AdminCategoriesScreenListItem
          key={index}
          name={category?.name}
          _id={category?._id}
          handleDeleteCategory={handleDeleteCategory}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  innerContainer: {
    backgroundColor: colors.color2,
    padding: 20,
    minHeight: 400,
  },
});

export default AdminCategoriesScreenList;
