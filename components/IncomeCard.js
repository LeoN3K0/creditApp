import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Card, Text, useTheme } from 'react-native-paper';

const IncomeCard = ({ type, avatar, amount, color, percent }) => {
    const theme = useTheme();

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
                <Text style={{color: color, fontSize: 22, marginBottom: 5 }}>{amount}</Text>
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
