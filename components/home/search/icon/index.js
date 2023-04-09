import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';
import { colors } from '../../../../styles';

const CustomHomeSearchIcon = ({ setActiveSearch }) => {
  const handleToggleSearchBar = () => setActiveSearch((prev) => !prev);
  return (
    <View>
      <TouchableOpacity onPress={handleToggleSearchBar}>
        <Avatar.Icon
          icon={'magnify'}
          size={50}
          color={'gray'}
          style={styles.searchIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchIcon: {
    backgroundColor: colors.color2,
    elevation: 12,
  },
});

export default CustomHomeSearchIcon;
