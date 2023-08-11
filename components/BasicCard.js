import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, Text, useTheme } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons'

function BasicCard(){
  
  return (
    <View style={{ height: 75, overflow: 'hidden'}}>
    <Card style={{ width: 155 }}>
        <LinearGradient
        colors={['#fa5c56', '#f5b468']}
        start={{ x: 0, y: 0.5 }} // Start at the left center
        end={{ x: 1, y: 0.5 }}   // End at the right center
        style={styles.gradient}
        >
        <Card.Content>
            <View>
                <View style={{paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2}}>
                    <Text style={{color: 'white', fontSize: 14, marginRight: 20}}>Creda</Text>
                    <View style={{paddingLeft: 20}}>
                    <FontAwesome
                    name="cc-visa"
                    size={20}
                    color="white"
                    />
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>                
                <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', paddingTop: 7, marginRight: 20}}>Basic</Text>
                <Avatar.Icon icon='tablet' size={45} style={{backgroundColor: 'transparent', paddingLeft: 20, }} />   
                </View>
            </View>
        </Card.Content>
        </LinearGradient>
    </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    gradient: {
    borderRadius: 10, 
    overflow: 'hidden',
    height: 85 
    },
  });

export default BasicCard;
