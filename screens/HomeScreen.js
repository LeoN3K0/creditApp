import axios from 'axios';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper'; // Import useTheme hook

function HomeScreen() {
  const theme = useTheme(); // Use the theme
  

  return (
    <View style={[styles.container, { backgroundColor: '#101010' }]}>
      <Text style={{ color: 'white' }}>GarageScreen Content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default HomeScreen;