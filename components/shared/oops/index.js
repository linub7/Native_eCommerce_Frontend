import { Text, View } from 'react-native';
import { defaultStyle } from '../../../styles';

const OopsComponent = ({ title }) => {
  return (
    <View style={defaultStyle}>
      <Text>{title}</Text>
    </View>
  );
};

export default OopsComponent;
