import React, {useState, useEffect} from 'react';
import { useTheme } from 'react-native-paper';
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Defs, Stop, LinearGradient, Path } from 'react-native-svg';
import axios from 'axios';

function SimpleMonthChart() {
    const theme = useTheme(); 
    const [data, setData] = useState([]);

    const Line = ({ line }) => (
      <Path
          key={'line'}
          d={line}
          stroke={'url(#lineGradient)'} // Apply the gradient to the stroke
          fill={'none'}
          strokeWidth={3}
      />
    )

    const fetchTransactions = () => {
        axios.get('http://192.168.132.114:8082/api/transactions')
          .then(response => {
            const currentMonth = new Date().toLocaleString('default', { month: 'long' });
            const currentMonthTransactions = response.data.filter(transaction => transaction.month === currentMonth);
            
            const amounts = currentMonthTransactions.map(transaction => parseFloat(transaction.amount.replace(' PLN', '')));
            setData(amounts);
          })
          .catch(error => {
            console.error('Error fetching transactions:', error);
          });
      };
    
      useEffect(() => {
        fetchTransactions();
      }, []);
  
    return (       
        <AreaChart
        style={{ flex: 1 }}
        data={data}
        contentInset={{ top: 5, bottom: 10 }}
        curve={shape.curveNatural}
        svg={{ 
        fill: 'url(#gradient)', 
        }}
        >
            <Line/>
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
    );
  }
  
  export default SimpleMonthChart;
