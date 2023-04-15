import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../../styles';

const CommonAuthHeading = ({ heading }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    backgroundColor: colors.color3,
    color: colors.color2,
    padding: 5,
    borderRadius: 5,
  },
});

export default CommonAuthHeading;
