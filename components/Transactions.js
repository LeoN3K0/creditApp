import { ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Card, IconButton, Text, useTheme } from "react-native-paper";


function Transaction() {
    const theme = useTheme();

    return(
        <View style={styles.container}> 
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: 'center'}}>
        <Text style={{color: 'white', fontSize: 16}}>Transactions</Text>
        <IconButton icon='magnify' iconColor="white" />
        </View>
        <Text style={{color: 'grey'}}>25.10</Text>
        <Card style={{marginRight: 20, marginTop: 10, height: 130, backgroundColor: '#181818'}}>
        <ScrollView style={{ marginBottom: 10 }}>            
            <Card.Content style={{flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                <View style={{flexDirection: 'row'}}>
                <Avatar.Icon icon='food' color='black' size={50} style={{backgroundColor: 'lightgreen', marginRight: 10}} />
                <View style={{flexDirection: 'column'}}>
                    <Text style={{color: 'white', fontSize: 16}}>Pasibus</Text>
                    <Text style={{color: 'grey'}}>Food</Text>
                </View>
                </View>
                <Text style={{color: 'white', fontSize: 18}}>29.90 PLN</Text>
            </Card.Content>            
            <View style={styles.divider} />            
            <Card.Content style={{flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>                
                <Avatar.Image size={50} source={require('../assets/Cinema_City.png')} style={{backgroundColor: 'black', marginRight: 10}} />
                <View style={{flexDirection: 'column'}}>
                    <Text style={{color: 'white', fontSize: 16}}>Cinama City</Text>
                    <Text style={{color: 'grey'}}>Entertainment</Text>
                </View>
                </View>
                <Text style={{color: 'white', fontSize: 18}}>20.00 PLN</Text>
            </Card.Content>          
        </ScrollView>
        </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: 10,
        marginLeft: 25

    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        marginHorizontal: 15
      },
  });

export default Transaction;