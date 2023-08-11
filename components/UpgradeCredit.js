import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, RadioButton, Text, useTheme } from 'react-native-paper';
import axios from 'axios';
import BasicCard from './BasicCard';
import RainbowCard from './RainbowCard';

function UpgradeCredit() {
  const theme = useTheme();
  const [activeCardType, setActiveCardType] = useState({
    type: 'basic',
    price: 0.00,
  });

  useEffect(() => {
    fetchActiveCardType();
  }, []);

  const fetchActiveCardType = async () => {
    try {
      const response = await axios.get('http://192.168.43.11:8082/api/settings/active-card-type');
      setActiveCardType(response.data);
    } catch (error) {
      console.error('Error fetching active card type:', error);
    }
  };

  const handleRadioButtonPress = async (newCardType) => {
    if (newCardType !== activeCardType.type) {
      try {
        await axios.put('http://192.168.43.11:8082/api/settings/active-card-type', { newCardType });
        setActiveCardType({ type: newCardType, price: activeCardType.price });
      } catch (error) {
        console.error('Error updating active card type:', error);
      }
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', fontSize: 16, marginBottom: 10 }}>Upgrade to Creda rainbow</Text>
      <Card style={{ marginRight: 20, backgroundColor: '#181818' }}>
        <Card.Content>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', top: 21, marginTop: -20}}>
                <View style={{flexDirection: 'row'}}>
                <View style={{marginRight: 10, marginTop: 5}}>
                <RadioButton
                  value="basic"
                  status={activeCardType.type === 'basic' ? 'checked' : 'unchecked'}
                  onPress={() => handleRadioButtonPress('basic')}
                  color='white'
                />
                </View>
                <View>
                    <Text style={{color: 'white', fontSize: 16}}>Creda Basic</Text>
                    <Text style={{color: 'grey', fontSize: 12, marginTop: 5}}>0.00 PLN/mo</Text>
                </View>
                </View>
                <BasicCard />
            </View>
        </Card.Content>
        <View style={styles.divider} />
        <Card.Content>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', top: 30, marginTop: -30}}>
                <View style={{flexDirection: 'row'}}>
                <View style={{marginRight: 10, marginTop: 5}}>
                <RadioButton
                  value="rainbow"
                  status={activeCardType.type === 'rainbow' ? 'checked' : 'unchecked'}
                  onPress={() => handleRadioButtonPress('rainbow')}
                  color='white'
                />
                </View>
                <View>
                    <Text style={{color: 'white', fontSize: 16}}>Creda Rainbow</Text>
                    <Text style={{color: 'grey', fontSize: 12, marginTop: 5}}>9.99 PLN/mo</Text>
                </View>
                </View>
                <RainbowCard />
            </View>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 20,
    marginLeft: 20,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginVertical: 20,
    marginHorizontal: 15,
  },
});

export default UpgradeCredit;
