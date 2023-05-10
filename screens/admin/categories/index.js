import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Keyboard, View } from 'react-native';
import Toast from 'react-native-toast-message';

import { colors, defaultStyle } from '../../../styles';
import HeaderComponent from '../../../components/shared/header';
import CommonAuthHeading from '../../../components/auth/heading';
import AdminCategoriesScreenList from '../../../components/admin/categories';
import AdminCategoriesScreenCreateCategory from '../../../components/admin/categories/create-category';
import { loadingStatus } from '../../../store/slices/loadingSlice';
import {
  createCategoryHandler,
  deleteSingleCategoryHandler,
} from '../../../api/category';
import {
  addCategoryAction,
  deleteCategoryAction,
} from '../../../store/slices/categorySlice';

const AdminCategoriesScreen = () => {
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { loading } = useSelector((state) => state.loading);
  const { token } = useSelector((state) => state.auth);

  const handleAddCategory = async () => {
    dispatch(loadingStatus({ status: true }));
    const name = category;
    const { err, data } = await createCategoryHandler(name, token);
    if (err) {
      console.log(err);
      dispatch(loadingStatus({ status: false }));
      return Toast.show({
        type: 'error',
        text1: err,
      });
    }

    dispatch(loadingStatus({ status: false }));
    Toast.show({
      type: 'success',
      text1: 'Category created successfully ✅',
    });
    dispatch(
      addCategoryAction({
        category: {
          _id: data?.data?.data?._id,
          id: data?.data?.data?.id,
          name: data?.data?.data?.name,
        },
      })
    );
    setCategory('');
    Keyboard.dismiss();
  };

  const handleDeleteCategory = async (id) => {
    const { err, data } = await deleteSingleCategoryHandler(id, token);
    if (err) {
      console.log(err);
      return Toast.show({
        type: 'error',
        text1: err,
      });
    }

    Toast.show({
      type: 'success',
      text1: 'Category deleted successfully ✔️',
    });
    dispatch(deleteCategoryAction({ _id: id }));
  };
  return (
    <View style={[defaultStyle, styles.container]}>
      <HeaderComponent back={true} />
      <View style={styles.innerContainer}>
        <CommonAuthHeading heading={'Categories '} />
      </View>
      <AdminCategoriesScreenList
        categories={categories}
        handleDeleteCategory={handleDeleteCategory}
      />
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
