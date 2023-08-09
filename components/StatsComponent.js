import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Card, useTheme } from 'react-native-paper';
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Defs, Stop, LinearGradient as SVGLinearGradient, Path } from 'react-native-svg';

function StatsComponent() {
    const theme = useTheme(); 
    const data = [20, 5, 5, 10, 20, 10, 30, 20, 0];
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
      <View style={styles.container}>  
        <View style={{flex: 2, paddingHorizontal: 10, marginLeft: 10}}>
          <Card style={{backgroundColor: '#181818'}}>
              <Card.Content>
                  <Text style={{color: 'lightgrey'}}>This month</Text>
                  <Text style={{color: 'white', fontSize: 18}}>-1256,32 PNL</Text>
                  <View style={{ marginLeft: -15, width: 232}}>
                      <View style={{ height: 60, top: 15 }}>
                      <AreaChart
                          style={{ flex: 1 }}
                          data={data}
                          contentInset={{ top: 5, bottom: 0 }}
                          curve={shape.curveNatural}
                          svg={{ 
                              fill: 'url(#gradient)', 
                          }}
                      >
                          <Line/>
                          {/* Define the gradient for the area */}
                          <Defs key={'gradient'}>
                          <SVGLinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
                              <Stop offset={'0%'} stopColor={'#71cfbb'} stopOpacity={0.3} />
                              <Stop offset={'40%'} stopColor={'#d77ba7'} stopOpacity={0.3} />
                              <Stop offset={'60%'} stopColor={'#a96746'} stopOpacity={0.3} />
                              <Stop offset={'100%'} stopColor={'#ecdf75'} stopOpacity={0.3} />
                          </SVGLinearGradient>
                          {/* Define the gradient for the line */}
                          <SVGLinearGradient id={'lineGradient'} x1={'0%'} y1={'0%'} x2={'100%'} y2={'0%'}>
                              <Stop offset={'0%'} stopColor={'#71cfbb'} />
                              <Stop offset={'40%'} stopColor={'#d77ba7'} />
                              <Stop offset={'60%'} stopColor={'#a96746'} />
                              <Stop offset={'100%'} stopColor={'#ecdf75'} />
                          </SVGLinearGradient>
                          </Defs>
                      </AreaChart>
                      </View>
                  </View>
              </Card.Content>
          </Card>
        </View>
        <View style={{flex: 1, paddingHorizontal: 10, marginRight: 10}}>
          <Card style={{backgroundColor: '#181818'}}>
              <Card.Content style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 135}}>
                  <ExpoLinearGradient
                      colors={['#fef77f', '#d979a0', '#71ccbc', '#f48d5c']} // Change gradient colors as needed
                      style={styles.gradientBorder}
                  >
                      <Avatar.Icon icon='circle-slice-6' style={{backgroundColor: '#181818', width: 60, height: 60}} />
                  </ExpoLinearGradient>
                  <Text style={{color: 'white', paddingVertical: 5}}>Summary</Text>
              </Card.Content>
          </Card>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 100,
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
