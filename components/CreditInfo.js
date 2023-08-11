import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Card, IconButton, Text, useTheme } from 'react-native-paper';

function CreditInfo() {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Card style={{ marginRight: 20, backgroundColor: '#181818' }}>
        <Card.Content>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View>
                    <Text style={{color: 'grey', fontSize: 14}}>Card no</Text>
                    <Text style={{color: 'white', fontSize: 16, marginTop: 5}}>1111 5643 6789 2137</Text>
                </View>
                <IconButton icon='content-copy' iconColor='white' size={20} style={{marginRight: -5, paddingTop: 15}}/>
            </View>
        </Card.Content>
        <View style={styles.divider} />
        <Card.Content>       
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{flex: 3, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View>
                        <Text style={{color: 'grey', fontSize: 14}}>Valid thru</Text>
                        <Text style={{color: 'white', fontSize: 16, marginTop: 5}}>12/2025</Text>
                    </View>
                    <View style={{flexDirection: 'row', paddingLeft: 85}}>
                        <IconButton icon='content-copy' iconColor='white' size={20} style={{paddingTop: 15}}/>                        
                    </View> 
                </View>
                <View style={styles.verticalDivider} />
                <View style={{flex: 2, flexDirection: 'row', justifyContent: 'space-between'}}>                
                <View>
                    <Text style={{color: 'grey', fontSize: 14}}>CVC</Text>
                    <Text style={{color: 'white', fontSize: 16, marginTop: 5}}>420</Text>
                </View>
                <View style={{flexDirection: 'row', paddingLeft: 50}}>
                <IconButton icon='content-copy' iconColor='white' size={20} style={{paddingTop: 15}}/>
                </View> 
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
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginVertical: 20,
    marginHorizontal: 15
  },
  verticalDivider: {
    borderRightWidth: 1,
    borderRightColor: 'grey',
    height: 50,
    marginHorizontal: 20
  },
});

export default CreditInfo;
