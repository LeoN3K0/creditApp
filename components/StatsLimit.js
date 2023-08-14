import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, useTheme } from 'react-native-paper';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import axios from 'axios';
import { useMonthContext } from '../MonthContext';
import { useFocusEffect } from '@react-navigation/native';

function StatsLimit() {
  const theme = useTheme();
  const { selectedMonth } = useMonthContext();
  const [totalSpendAmount, setTotalSpendAmount] = useState(0);
  const [monthlyLimit, setMonthlyLimit] = useState(0);
  const [limit, setLimit] = useState(0);
  const apiBaseUrl = process.env.EXPO_PUBLIC_BASE_URL;

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

  const fetchMonthlyLimit = () => {
    axios.get(`${apiBaseUrl}settings/monthly-limit`)
      .then(response => {
        setMonthlyLimit(parseFloat(response.data.monthlyLimit));
      })
      .catch(error => {
        console.error('Error fetching monthly limit:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTransactions();
    fetchMonthlyLimit();  
  }, [selectedMonth]);

  useEffect(() => {
    setLimit(monthlyLimit - totalSpendAmount);
  }, [monthlyLimit, totalSpendAmount]);

  useFocusEffect(() => {
    fetchMonthlyLimit();
    fetchTransactions();
  });

  const currentLimit = limit; 
  const maxLimit = monthlyLimit;

  const progress = currentLimit / maxLimit; // Calculate the progress ratio between 0 and 1

  return (
    <View style={styles.container}>
      <Card style={{ marginRight: 20, backgroundColor: '#181818' }}>
        <Card.Content>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: 'white', fontSize: 16 }}>
              Monthly limit
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: 'white', fontSize: 16 }}>
                {currentLimit.toFixed(2)}
              </Text>
              <Text style={{ color: 'grey', fontSize: 16 }}>
                /{maxLimit.toFixed(2)}
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <Svg width="100%" height="20">
              {/* Background rectangle with rounded ends */}
              <Rect
                x="0"
                y="5"
                width="100%"
                height="10"
                rx="5" // Border radius for rounded ends
                fill="black"
              />
              {/* Gradient line on top that changes length */}
              <Defs>
                    <LinearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                    <Stop offset="0%" stopColor='#f98655'/>
                    <Stop offset="100%" stopColor='#f65455' />
                    </LinearGradient>
                </Defs>
              <Rect
                x="0"
                y="5"
                width={`${progress * 100}%`}
                height="10"
                rx="5"
                fill="url(#gradient)"
                />
            </Svg>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 20,
    marginLeft: 20,
  },
});

export default StatsLimit;
