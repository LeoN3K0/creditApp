import { ScrollView, StyleSheet, View } from "react-native";
import { Card, IconButton, Text, useTheme } from "react-native-paper";
import PercentCircle from './PercentCircle';


function SpendingSummary() {
    const theme = useTheme();

    return(
        <View style={styles.container}> 
        <Text style={{color: 'white', fontSize: 16}}>Spending summary</Text>
        <Card style={{marginRight: 20, marginTop: 10, height: 130, backgroundColor: '#181818'}}>
        <ScrollView style={{ marginBottom: 10 }}>            
            <Card.Content style={{marginVertical: 10}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View>
                <Text style={{color: 'white', fontSize: 16}}>Entertainment</Text>
                <Text style={{color: 'grey', fontSize: 14}}>1443.67 PLN</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <PercentCircle size={65} color="#89fee3" percent={44} />
                <IconButton icon='chevron-right' iconColor="white" size={35} style={{marginRight: -10, alignSelf: 'center'}} />
                </View>
                </View>
            </Card.Content>
            <View style={styles.divider} />
            <Card.Content style={{marginVertical: 10}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View>
                <Text style={{color: 'white', fontSize: 16}}>HouseHolds</Text>
                <Text style={{color: 'grey', fontSize: 14}}>698.12 PLN</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <PercentCircle size={65} color="#ff915a" percent={19} />
                <IconButton icon='chevron-right' iconColor="white" size={35} style={{marginRight: -10, alignSelf: 'center'}} />
                </View>
                </View>
            </Card.Content> 
            <View style={styles.divider} />
            <Card.Content style={{marginVertical: 10}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View>
                <Text style={{color: 'white', fontSize: 16}}>Food</Text>
                <Text style={{color: 'grey', fontSize: 14}}>628.98 PLN</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <PercentCircle size={65} color="#fbf662" percent={19} />
                <IconButton icon='chevron-right' iconColor="white" size={35} style={{marginRight: -10, alignSelf: 'center'}} />
                </View>
                </View>
            </Card.Content> 
            <View style={styles.divider} />
            <Card.Content style={{marginVertical: 10}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View>
                <Text style={{color: 'white', fontSize: 16}}>Taxes</Text>
                <Text style={{color: 'grey', fontSize: 14}}>400.00 PLN</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <PercentCircle size={65} color="#f083a9" percent={18} />
                <IconButton icon='chevron-right' iconColor="white" size={35} style={{marginRight: -10, alignSelf: 'center'}} />
                </View>
                </View>
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
        marginLeft: 20

    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        marginHorizontal: 15
      },
  });

export default SpendingSummary;