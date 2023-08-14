import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Card, Text, useTheme } from 'react-native-paper';



const formatNumber = (number) => {
  // Convert the number to a string
  const numStr = (number !== undefined) ? number.toString() : '0';

  // Split the number into parts before and after the decimal point
  const [integerPart, decimalPart] = numStr.split('.');

  // Add apostrophes as separators for thousands
  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, "'");

  // Format the decimal part to always have two decimal places
  const formattedDecimalPart = decimalPart ? decimalPart.padEnd(2, '0').slice(0, 2) : '00';

  // Combine integer and decimal parts back
  const formattedNumber = `${formattedIntegerPart}.${formattedDecimalPart}`;

  return formattedNumber;
};


const IncomeCard = ({ type, avatar, amount, color, percent }) => {
    const theme = useTheme();
    const formattedAmount = formatNumber(amount);
    

    return (
    <View style={styles.container}>
      <Card style={{ backgroundColor: '#181818', width: 175}}>
        <Card.Content>
          <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                <Text style={{color: 'white'}}>{type}</Text>
                <Avatar.Icon icon={avatar} size={35} color={color} style={{backgroundColor: 'transparent'}} />
            </View>
            <View style={{alignItems: 'flex-end'}}>
                <Text style={{color: color, fontSize: 22, marginBottom: 5 }}>{formattedAmount}</Text>
                <Text style={{color: 'grey'}}>{percent}% Goal</Text>
            </View>
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
});

export default IncomeCard;
