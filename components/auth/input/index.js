import { TextInput } from 'react-native-paper';
import { inputStyling } from '../../../styles';

const CommonAuthInput = ({
  placeholder,
  color,
  value,
  onChangeText,
  secureTextEntry = false,
}) => {
  return (
    <TextInput
      //   style={inputStyling}
      mode="outlined"
      activeOutlineColor={color}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default CommonAuthInput;
