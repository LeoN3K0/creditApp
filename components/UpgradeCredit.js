import React, {useState} from 'react';
import { View, StyleSheet} from 'react-native';
import { Card, RadioButton, Text, useTheme } from 'react-native-paper';
import BasicCard from './BasicCard';
import RainbowCard from './RainbowCard';

function UpgradeCredit() {
  const theme = useTheme();
  const [checked, setChecked] = React.useState('first');

  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', fontSize: 16, marginBottom: 10 }}>Upgrade to Creda rainbow</Text>
      <Card style={{ marginRight: 20, backgroundColor: '#181818' }}>
        <Card.Content>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', top: 21, marginTop: -20}}>
                <View style={{flexDirection: 'row'}}>
                <View style={{marginRight: 10, marginTop: 5}}>
                <RadioButton
                    value="first"
                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('first')}
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
                    value="first"
                    status={ checked === 'second' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('second')}
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
