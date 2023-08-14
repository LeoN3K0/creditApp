import React, { useEffect, useState } from 'react';
import { Card, Text, Title, Avatar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Import axios for making API requests

const CreditCard = ({ cardLimits, currency, expiry, cardNumber }) => {
  const navigation = useNavigation();
  const [activeCardType, setActiveCardType] = useState('basic'); // Initialize with default value

  useEffect(() => {
    fetchActiveCardType();
  }, []);

  const fetchActiveCardType = async () => {
    try {
      const response = await axios.get('http://192.168.132.114:8082/api/settings/active-card-type'); // Replace with your API endpoint
      setActiveCardType(response.data.type);
    } catch (error) {
      console.error('Error fetching active card type:', error);
    }
  };

  const gradientColors = activeCardType === 'basic'
    ? ['#fa5c56', '#f5b468']
    : ['#f9e979', '#ff925c', '#f083a9', '#7dd6c5'];

  return (
    <Card style={styles.card} onPress={() => navigation.navigate('CardSettings')}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0.5 }} // Start at the left center
        end={{ x: 1, y: 0.5 }}   // End at the right center
        style={styles.gradient}
      >
        <Card.Content style={styles.contentContainer}>
          <View style={styles.cardLimit}>
            <View style={{flexDirection: 'row'}}>
            <Title style={{color: 'white', fontSize: 35, paddingTop: 5}}>{cardLimits}</Title>
            <Title style={{color: 'white', fontSize: 35, paddingTop: 5, paddingLeft: 10}}>{currency}</Title>
            </View>
          <FontAwesome
          name="cc-visa"
          size={24}
          color="white"
          />
          </View>
          <Text style={{color: 'white', fontSize: 15, paddingTop: 2}}>VISA Credit</Text>
          <View style={styles.cardInfo}>
            <View style={{flexDirection: 'row'}}>
              <View style={{paddingRight: 25}}>
                <Text style={{color: 'white'}}>Card no</Text>
                <Text style={{color: 'white'}}>**** {cardNumber}</Text>
              </View>
              <View>
              <Text style={{color: 'white'}}>Valid thru</Text>
              <Text style={{color: 'white'}}>{expiry}</Text>
              </View>
            </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Avatar.Icon size={35} icon="white-balance-sunny" style={{backgroundColor: 'transparent'}} />
                <Avatar.Icon size={35} icon="star-four-points" style={{transform: [{ rotate: '45deg' }], backgroundColor: 'transparent'}} />
                <Avatar.Icon size={35} icon="shuriken" style={{ transform: [{ rotate: '45deg' }], backgroundColor: 'transparent' }}/> 
              </View>         
          </View>
        </Card.Content>
      </LinearGradient>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20, 
    width: '98%',
    height: 200,
    margin: 16,
    elevation: 3,
    top: 10,
  },
  gradient: {
    borderRadius: 20, 
    overflow: 'hidden', 
    height: 200,
  },
  contentContainer: {
    flexDirection: 'column',
  },
  cardLimit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start', 
    marginTop: 20
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 60
  },
});

export default CreditCard;
