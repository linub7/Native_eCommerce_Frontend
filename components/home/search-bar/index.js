import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';
import { colors } from '../../../styles';

const CustomHomeSearchBar = () => {
  return (
    <View>
      <TouchableOpacity>
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

export default CustomHomeSearchBar;