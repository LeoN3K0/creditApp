import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Text, useTheme } from 'react-native-paper';
import StatisticsChart from './StatisticsChart';

const StatisticsHeader = ({ navigation, title }) => {
  const theme = useTheme();
  return (
    <View style={styles.headerContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={styles.titleContainer}>        
        <Text style={styles.titleText}>{title}</Text>        
      </View>  
      <View style={{marginBottom: 15}}>
        <IconButton
          icon="close"
          iconColor='white'
          size={24}
          onPress={() => navigation.goBack()}
        />
      </View> 
      </View> 
      <View style={{height: 250}}>
      <StatisticsChart />
      </View>    
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
     backgroundColor: '#181818',
     flexDirection: 'column',
     paddingTop: 60, 
     alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 5
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 50,
    marginBottom: 10
  },
});

export default StatisticsHeader;