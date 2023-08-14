import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper'; // Import useTheme hook
import StatsLimit from '../components/StatsLimit';
import IncomeCard from '../components/IncomeCard';
import SpendingSummary from '../components/SpendingSummary';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import { useMonthContext } from '../MonthContext';

function StatisticsScreen() {
  const theme = useTheme();
  const [monthlyIncome, setMonthlyIncome] = useState();
  const { selectedMonth } = useMonthContext();
  const [totalSpendAmount, setTotalSpendAmount] = useState(0);
  const percent = (totalSpendAmount / monthlyIncome).toFixed(2) * 100;
  const apiBaseUrl = process.env.EXPO_PUBLIC_BASE_URL;

    const fetchCreditData = () => {
      axios.get(`${apiBaseUrl}credit-cards`)
        .then(response => {
          setMonthlyIncome(response.data[0].monthlyIncome);
        })
        .catch(error => {
          console.error('Error fetching credit card data:', error);
        });
    };  

    const fetchTransactions = () => {
      axios.get(`${apiBaseUrl}transactions`)
        .then(response => {
          const monthTransactions = response.data.filter(transaction => transaction.month === selectedMonth);
  
          const totalSpendAmount = monthTransactions.reduce((total, transaction) => {
            const amount = parseFloat(transaction.amount.replace(' PLN', ''));
            return total + amount;
          }, 0);
    
          setTotalSpendAmount(totalSpendAmount);
        })
        .catch(error => {
          console.error('Error fetching transactions:', error);
        });
    };
  
    useEffect(() => {
      fetchCreditData();
      fetchTransactions();  
    }, [selectedMonth]);


  return (
    <View style={[styles.container, { backgroundColor: '#101010' }]}>
      <StatsLimit />
      <View style={{flexDirection: 'row', marginBottom: 10}}>  
      <IncomeCard type='Income' amount={monthlyIncome !==0 ? monthlyIncome : 0} percent={100} color='#6cd77d'/>
      <IncomeCard type='Spendings' avatar={totalSpendAmount > monthlyIncome ? 'alert' : undefined} color={totalSpendAmount > monthlyIncome ? '#ff595a' : 'white'} amount={totalSpendAmount} percent={percent} />
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