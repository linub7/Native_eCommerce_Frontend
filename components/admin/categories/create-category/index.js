import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import CommonAuthInput from '../../../auth/input';
import { colors } from '../../../../styles';

const AdminCategoriesScreenCreateCategory = ({
  setCategory,
  category,
  onPress,
  loading,
}) => {
  return (
    <View style={styles.container}>
      <CommonAuthInput
        placeholder={'Category Name'}
        value={category}
        onChangeText={setCategory}
        color={colors.color1}
      />
      <Button
        loading={loading}
        textColor={colors.color2}
        style={styles.btn}
        onPress={onPress}
        disabled={!category}
      >
        Add Category
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: colors.color3,
  },
  btn: {
    backgroundColor: colors.color1,
    margin: 20,
    padding: 6,
  },
});

export default AdminCategoriesScreenCreateCategory;
