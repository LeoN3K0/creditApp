import { LinearGradient } from 'expo-linear-gradient';
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Card, useTheme } from 'react-native-paper';
import SimpleMonthChart from './SimpleMonthChart';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

function StatsComponent() {
    const theme = useTheme();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [totalSpendAmount, setTotalSpendAmount] = useState(0);
    const [currentMonthTransactions, setCurrentMonthTransactions] = useState([]);

  
  const fetchTransactions = () => {
    axios.get('http://192.168.43.11:8082/api/transactions')
      .then(response => {
        const currentMonth = new Date().toLocaleString('default', { month: 'long' });
        const currentMonthTransactions = response.data.filter(transaction => transaction.month === currentMonth);
        setCurrentMonthTransactions(currentMonthTransactions);

        const totalSpendAmount = currentMonthTransactions.reduce((total, transaction) => {
          const amount = parseFloat(transaction.amount.replace(' PLN', ''));
          return total + amount;
        }, 0);
  
        setTotalSpendAmount(totalSpendAmount);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching transactions:', error);
      });
  };

  useEffect(() => {
    fetchTransactions();
  }, []);
  
    return (
      <View style={styles.container}>  
        <View style={{flex: 2, paddingHorizontal: 10, marginLeft: 10}}>
          <Card style={{backgroundColor: '#181818', borderRadius: 20, overflow: 'hidden'}}>
              <Card.Content>
              {loading ? (
              <Text style={{ color: 'white', fontSize: 18 }}>Loading...</Text>
              ) : (
                currentMonthTransactions.length === 0 ? (
                  <Text style={{ color: 'white', fontSize: 18 }}>No transactions</Text>
                ) : (
                  <View>
                    <Text style={{ color: 'lightgrey' }}>This month</Text>
                    <Text style={{ color: 'white', fontSize: 18 }}>-{totalSpendAmount.toFixed(2)} PNL</Text>
                    <View style={{ marginLeft: -15, width: 232 }}>
                      <View style={{ height: 60, top: 15 }}>
                        <SimpleMonthChart />
                      </View>
                    </View>
                  </View>
                )
              )}
              </Card.Content>
          </Card>
        </View>
        <View style={{flex: 1, paddingHorizontal: 10, marginRight: 10}}>
          <Card style={{backgroundColor: '#181818', borderRadius: 20}} onPress={() => navigation.navigate('Statistics')}>
              <Card.Content style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 142}}>
                  <LinearGradient
                      colors={['#fef77f', '#d979a0', '#71ccbc', '#f48d5c']} // Change gradient colors as needed
                      style={styles.gradientBorder}
                  >
                      <Avatar.Icon icon='circle-slice-6' style={{backgroundColor: '#181818', width: 60, height: 60}} />
                  </LinearGradient>
                  <Text style={{color: 'white', paddingVertical: 5}}>Summary</Text>
              </Card.Content>
          </Card>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 90,
      flexDirection: 'row',   
    },
    gradientBorder: {
      width: 65,
      height: 65,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export default StatsComponent;
