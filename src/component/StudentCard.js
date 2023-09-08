import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const StudentName = ({ studentName }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.subtitle1}>Hi </Text>
      <Text style={styles.subtitle1}>{studentName}</Text>
    </View>
  );
};

const StudentClass = ({ studentClass }) => {
  return <Text style={styles.subtitle2}>{studentClass}</Text>;
};

const StudentYear = ({ studentYear }) => {
  return (
    <View style={styles.yearContainer}>
      <Text style={[styles.subtitle2, styles.textBlack]}>{studentYear}</Text>
    </View>
  );
};

const StudentPicture = ({ picAddress, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={{ uri: picAddress }} style={styles.profilePicture} />
    </TouchableOpacity>
  );
};

const StudentDataCard = ({ title, value, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.dataCard}>
        <Text style={[styles.subtitle1, styles.textBlack]}>{title}</Text>
        <Text style={[styles.subtitle2, styles.textLight]}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  subtitle1: {
    fontSize: 16,
    // Add any other styles you need
  },
  subtitle2: {
    fontSize: 14,
    // Add any other styles you need
  },
  yearContainer: {
    width: '30%',
    height: 40, // You can adjust the height as needed
    backgroundColor: '#EAEAEA', // Use your desired color
    borderRadius: 8, // Adjust the border radius as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBlack: {
    color: 'black',
  },
  profilePicture: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    borderRadius: 50, // To make it circular
  },
  dataCard: {
    width: '42%',
    height: 120, // You can adjust the height as needed
    backgroundColor: '#EAEAEA', // Use your desired color
    borderRadius: 8, // Adjust the border radius as needed
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textLight: {
    color: 'lightgray',
  },
});

export { StudentName, StudentClass, StudentYear, StudentPicture, StudentDataCard };
