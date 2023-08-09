import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme, Text } from 'react-native-paper'; 
import StatsComponent from '../components/StatsComponent';


function YourCardsScreen() {
  const theme = useTheme(); 

  return (
    <View style={[styles.container, { backgroundColor: '#101010' }]}>
      <StatsComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default YourCardsScreen;