import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, IconButton, Text, useTheme } from 'react-native-paper';

const CardSettingsHeader = ({ navigation, title }) => {
  const theme = useTheme();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>        
        <Text style={styles.titleText}>{title}</Text>        
      </View>  
      <View style={{marginBottom: 10}}>
        <IconButton
          icon="close"
          iconColor='white'
          size={24}
          onPress={() => navigation.goBack()}
        />
      </View>      
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
     backgroundColor: '#181818',
     flexDirection: 'row',
     paddingTop: 60, 
     alignItems: 'center'

  },
  titleContainer: {
    flex: 2,
    alignItems: 'center'
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 50,
    marginBottom: 10
  },
});

export default CardSettingsHeader;