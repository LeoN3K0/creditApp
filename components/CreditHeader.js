import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';
import CreditCard from './CreditCard';

function CreditHeader({ title }) {
  return (
    <Appbar.Header style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Appbar.Content title={title} titleStyle={styles.title} />
        </View>
        <Avatar.Image source={require('../assets/avatar.png')} size={70} style={styles.avatar} />
      </View>
      <CreditCard
        cardLimits="907.21"
        currency="PLN"
        expiry="12/2025"
        cardNumber='2137'
      />
      
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
