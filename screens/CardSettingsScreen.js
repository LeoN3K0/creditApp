import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper'; // Import useTheme hook
import MonthlyLimit from '../components/MonthlyLimit';
import CreditInfo from '../components/CreditInfo';
import UpgradeCredit from '../components/UpgradeCredit';
import FreezeCard from '../components/FreezeCard';
import CustomTabBarCenter from '../components/CustomTabBarCenter';

function CardSettingsScreen() {
  const theme = useTheme(); // Use the theme

  return (
    <View style={[styles.container, { backgroundColor: '#101010' }]}>
        <MonthlyLimit />
        <CreditInfo />
        <UpgradeCredit />
        <FreezeCard />
        <CustomTabBarCenter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
});

export default CardSettingsScreen;