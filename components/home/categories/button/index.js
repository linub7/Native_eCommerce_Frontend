import { Text } from 'react-native';
import { Button } from 'react-native-paper';

const HomeScreenCategoriesButton = ({
  btnTitle = '',
  handlePress = () => {},
  btnStyle,
  textStyle,
}) => {
  return (
    <Button style={btnStyle} onPress={handlePress}>
      <Text style={textStyle}>{btnTitle}</Text>
    </Button>
  );
};

export default HomeScreenCategoriesButton;
