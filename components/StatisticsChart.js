import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useTheme, Text, Button } from 'react-native-paper';
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Defs, Stop, LinearGradient, Path } from 'react-native-svg';
import { useMonthContext } from '../MonthContext'; 
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

function StatisticsChart() {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const { selectedMonth, setMonth } = useMonthContext(); 
  const navigation = useNavigation();
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const Line = ({ line }) => (
    <Path
      key={'line'}
      d={line}
      stroke={'url(#lineGradient)'}
      fill={'none'}
      strokeWidth={3}
    />
  );

  const handleMonthClick = (index) => {
    setMonth(months[index]); 
  };

  const fetchTransactions = () => {
    axios.get('http://192.168.132.114:8082/api/transactions')
      .then(response => {
        const monthTransactions = response.data.filter(transaction => transaction.month === selectedMonth);
    
        
        const amounts = monthTransactions.map(transaction => parseFloat(transaction.amount.replace(' PLN', '')));
        setData(amounts);

      })
      .catch(error => {
        console.error('Error fetching transactions:', error);
      });
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [handleMonthClick, navigation]);
  


    return (
        <View style={{}}>
           <ScrollView horizontal style={{marginBottom: -75}}> 
                <View style={{ flexDirection: 'row'}}>
                {months.map((month, index) => (
                    <Button
                    key={index}
                    onPress={() => handleMonthClick(index)}
                    disabled={selectedMonth === month}
                    style={{
                        paddingHorizontal: 10,
                        marginRight: 10,
                    }}
                    >
                    <Text
                        style={{
                        color: selectedMonth === month ? 'white' : 'grey'
                        }}
                    >
                        {month}
                    </Text>
                    </Button>
                ))}
                </View>
            </ScrollView>
            {data.length > 0 ? ( 
            <>           
            <AreaChart
                style={{ flex: 1}}
                data={data}
                contentInset={{ top: 5, bottom: 15 }}
                curve={shape.curveNatural}
                svg={{
                    fill: 'url(#gradient)',
                }}
            >
                <Line />
                {/* Define the gradient for the area */}
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
                <Stop offset={'0%'} stopColor={'#71cfbb'} stopOpacity={0.2} />
                <Stop offset={'40%'} stopColor={'#d77ba7'} stopOpacity={0.2} />
                <Stop offset={'60%'} stopColor={'#a96746'} stopOpacity={0.2} />
                <Stop offset={'100%'} stopColor={'#ecdf75'} stopOpacity={0.2} />
                </LinearGradient>
            {/* Define the gradient for the line */}
                <LinearGradient id={'lineGradient'} x1={'0%'} y1={'0%'} x2={'100%'} y2={'0%'}>
                <Stop offset={'0%'} stopColor={'#71cfbb'} />
                <Stop offset={'40%'} stopColor={'#d77ba7'} />
                <Stop offset={'60%'} stopColor={'#a96746'} />
                <Stop offset={'100%'} stopColor={'#ecdf75'} />
                </LinearGradient>
            </Defs>
            </AreaChart>
            <ScrollView horizontal style={{marginVertical: -60}}>
                <View style={{ }}>
                    <ScrollView horizontal>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {data.map((value, index) => (
                                <Text
                                    key={index}
                                    style={{
                                        color: 'grey',
                                        marginRight: 10,
                                        paddingBottom: 5,
                                        paddingHorizontal: 10,
                                        minWidth: 60, // Add a fixed width for consistent spacing
                                        textAlign: 'center', // Center the text within the fixed width
                                    }}
                                >
                                    {value.toFixed(2)}
                                </Text>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
            </>
            ) :(
                <Text style={{color: 'white', alignSelf: 'center', marginBottom: 100, fontSize: 20}}>No Data....</Text>
            )}
        </View>
    );
}

export default StatisticsChart;
