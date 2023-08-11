import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme, Text } from 'react-native-paper'; 
import StatsComponent from '../components/StatsComponent';
import Transaction from '../components/Transactions';


function YourCardsScreen() {
  const theme = useTheme(); 

  return (
    <View style={[styles.container, { backgroundColor: '#101010' }]}>
      <StatsComponent />
      <Transaction />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default YourCardsScreen;