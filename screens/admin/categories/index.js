import { ScrollView, StyleSheet, Keyboard, View } from 'react-native';
import { colors, defaultStyle } from '../../../styles';
import HeaderComponent from '../../../components/shared/header';
import CommonAuthHeading from '../../../components/auth/heading';
import AdminCategoriesScreenList from '../../../components/admin/categories';
import AdminCategoriesScreenCreateCategory from '../../../components/admin/categories/create-category';
import { useState } from 'react';

const categories = [
  {
    name: 'Laptop',
    _id: 'llmacaca',
  },
  {
    name: 'Accessories',
    _id: 'llmacacakmlmca',
  },
  {
    name: 'cosmetic',
    _id: 'lmlcamlcajttilmcaca',
  },
];

const loading = false;

const AdminCategoriesScreen = () => {
  const [category, setCategory] = useState('');

  const handleAddCategory = () => {
    console.log(`add category ${category}`);
    setCategory('');
    Keyboard.dismiss();
  };
  return (
    <View style={[defaultStyle, styles.container]}>
      <HeaderComponent back={true} />
      <View style={styles.innerContainer}>
        <CommonAuthHeading heading={'Categories '} />
      </View>
      <AdminCategoriesScreenList categories={categories} />
      <AdminCategoriesScreenCreateCategory
        category={category}
        setCategory={setCategory}
        onPress={handleAddCategory}
        loading={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: colors.color5 },
  innerContainer: { paddingTop: 70 },
});

export default AdminCategoriesScreen;
