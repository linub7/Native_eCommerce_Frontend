import { ScrollView, StyleSheet, View } from 'react-native';
import { colors } from '../../../../styles';
import AdminProductImagesScreenListItem from './item';

const AdminProductImagesScreenList = ({ imgs, handleDeleteImage }) => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        {imgs?.map((el, index) => (
          <AdminProductImagesScreenListItem
            key={index}
            src={el.url}
            _id={el._id}
            handleDeleteImage={handleDeleteImage}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: { marginBottom: 20 },
  container: {
    backgroundColor: colors.color2,
    padding: 40,
    minHeight: 400,
  },
});
export default AdminProductImagesScreenList;
