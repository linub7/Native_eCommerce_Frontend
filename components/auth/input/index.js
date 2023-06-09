import { TextInput } from 'react-native-paper';
import { inputStyling } from '../../../styles';

const CommonAuthInput = ({
  placeholder,
  color,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
}) => {
  return (
    <TextInput
      style={inputStyling}
      mode="outlined"
      keyboardType={keyboardType}
      activeOutlineColor={color}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default CommonAuthInput;
