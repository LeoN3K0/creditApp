import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Avatar, Card, Text, useTheme } from 'react-native-paper';


function FreezeCard() {
  const theme = useTheme();


  return (
    <View style={styles.container}>
    <Card style={{ marginRight: 20, backgroundColor: '#181818', borderRadius: 60,}}>
        <Card.Content style={{marginVertical: -10}}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Freeze card</Text>
            <Avatar.Icon size={40} icon="snowflake" color='#88cef4' style={{ backgroundColor: 'transparent' }}/>
            </View>
        </Card.Content>
    </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: 50,
        marginLeft: 20,
    },
});

export default FreezeCard;
