import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper'; // Import useTheme hook
import StatsLimit from '../components/StatsLimit';
import IncomeCard from '../components/IncomeCard';
import SpendingSummary from '../components/SpendingSummary';


function StatisticsScreen() {
  const theme = useTheme(); // Use the theme

  return (
    <View style={[styles.container, { backgroundColor: '#101010' }]}>
      <StatsLimit />
      <View style={{flexDirection: 'row', marginBottom: 10}}>
      <IncomeCard type='Income' amount="13'099.00" percent={100} color='#6cd77d'/>
      <IncomeCard type='Spendings' avatar='alert' color='#ff595a' amount="14'006.21" percent={112} />
      </View>
      <SpendingSummary />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
});

export default StatisticsScreen;