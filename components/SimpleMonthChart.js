import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Defs, Stop, LinearGradient, Path } from 'react-native-svg';

function SimpleMonthChart() {
    const theme = useTheme(); 
    const data = [20.5, 5, 5, 10, 20, 10, 30, 20, 20, 30, 10];
    const Line = ({ line }) => (
      <Path
          key={'line'}
          d={line}
          stroke={'url(#lineGradient)'} // Apply the gradient to the stroke
          fill={'none'}
          strokeWidth={3}
      />
    )
  
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
