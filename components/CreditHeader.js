import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Avatar, Text } from 'react-native-paper';
import CreditCard from './CreditCard';
import axios from 'axios';

function CreditHeader({ title }) {
  const [loading, setLoading] = useState(true);
  const [creditData, setCreditData] = useState(null);
  const [monthlyLimit, setMonthlyLimit] = useState(0);
  const [totalSpendAmount, setTotalSpendAmount] = useState(0);
  const [cardLimit, setCardLimit] = useState(0);

  const fetchCreditData = () => {
    axios.get('http://192.168.132.114:8082/api/credit-cards')
      .then(response => {
        setCreditData(response.data[0]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching credit card data:', error);
        setLoading(false);
      });
  };
  
  const fetchTransactions = () => {
    axios.get('http://192.168.132.114:8082/api/transactions')
      .then(response => {
        const currentMonth = new Date().toLocaleString('default', { month: 'long' });
        const currentMonthTransactions = response.data.filter(transaction => transaction.month === currentMonth);
  
        const totalSpendAmount = currentMonthTransactions.reduce((total, transaction) => {
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
    axios.get('http://192.168.132.114:8082/api/settings/monthly-limit')
      .then(response => {
        setMonthlyLimit(parseFloat(response.data.monthlyLimit));
      })
      .catch(error => {
        console.error('Error fetching monthly limit:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCreditData();
    fetchTransactions();
    fetchMonthlyLimit();
  }, []);

  useEffect(() => {
    setCardLimit(monthlyLimit - totalSpendAmount);
  }, [monthlyLimit, totalSpendAmount]);

  return (
    <Appbar.Header style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Appbar.Content title={title} titleStyle={styles.title} />
        </View>
        <Avatar.Image source={require('../assets/avatar.png')} size={70} style={styles.avatar} />
      </View>
      {loading ? (
        <Text style={{color: 'white'}}>Loading...</Text>
      ) : (
        <CreditCard
          cardLimits={cardLimit.toFixed(2)}
          currency={creditData.currency}
          expiry={creditData.expiry}
          cardNumber={creditData.cardNumber.slice(-4)}
        />
      )}      
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181818',
    height: 250,
    paddingHorizontal: 16, 
    flexDirection: 'column',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start', 
    marginTop: 10, 
    position: 'relative'
  },
  titleContainer: {
    flex: 1, 
    marginTop: 20
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
  },
  avatar: {
    backgroundColor: '#101010',
  },
});

export default CreditHeader;
