import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Card, useTheme } from 'react-native-paper';
import SimpleMonthChart from './SimpleMonthChart';

function StatsComponent() {
    const theme = useTheme(); 
  
    return (
      <View style={styles.container}>  
        <View style={{flex: 2, paddingHorizontal: 10, marginLeft: 10}}>
          <Card style={{backgroundColor: '#181818'}}>
              <Card.Content>
                  <Text style={{color: 'lightgrey'}}>This month</Text>
                  <Text style={{color: 'white', fontSize: 18}}>-1256,32 PNL</Text>
                  <View style={{ marginLeft: -15, width: 232}}>
                    <View style={{ height: 60, top: 15 }}>
                      <SimpleMonthChart/>
                    </View>
                  </View>
              </Card.Content>
          </Card>
        </View>
        <View style={{flex: 1, paddingHorizontal: 10, marginRight: 10}}>
          <Card style={{backgroundColor: '#181818'}}>
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
