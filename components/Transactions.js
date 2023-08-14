import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Card, IconButton, Text, useTheme } from "react-native-paper";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";


function Transaction() {
    const theme = useTheme();
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    const [averageSpent, setAverageSpent] = useState(0);
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const apiBaseUrl = process.env.EXPO_PUBLIC_BASE_URL;


    const fetchTransactions = () => {
        axios.get(`${apiBaseUrl}transactions`)
          .then(response => {
            const currentMonthTransactions = response.data.filter(transaction => transaction.month === currentMonth);
            setTransactions(currentMonthTransactions);
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching transactions:', error);
            setLoading(false);
          });
      };

      const fetchAverage = () => {
        axios.get(`${apiBaseUrl}average-spent/${currentMonth}`)
          .then(response => {
            setAverageSpent(response.data.averageSpent);
    
          })
          .catch(error => {
            console.error('Error fetching transactions:', error);
          });
      };

      useEffect(() => {
        fetchTransactions();
        fetchAverage();
      }, []);

      /*useFocusEffect(() => {
        fetchAverage();
        fetchTransactions();
      });*/

      const getAvatarIconAndColor = (type) => {
        switch (type) {
          case "Entertainment":
            return { icon: "movie", backgroundColor: "lightblue" };
          case "Households":
            return { icon: "account-group", backgroundColor: "gold" };
          case "Food":
            return { icon: "food", backgroundColor: "lightgreen" };
          case "Taxes":
            return { icon: "file-document-outline", backgroundColor: "white" };
          default:
            return { icon: "circle", backgroundColor: "grey" };
        }
      };

      return(
        <View style={styles.container}>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: 'center'}}>
                <Text style={{color: 'white', fontSize: 16}}>Transactions</Text>
                <IconButton icon='magnify' iconColor="white" />
            </View>
            {loading ? (
                <Text style={{color: 'white', fontSize: 18, marginTop: 10}}>Loading...</Text>
            ) : (
                <>
                    <Text style={{color: 'grey'}}>{averageSpent}</Text>
                    <Card style={{marginRight: 20, marginTop: 10, height: 130, backgroundColor: '#181818'}}>
                        <ScrollView style={{ marginBottom: 10 }}>
                            {transactions.map(transaction => (
                                <React.Fragment key={transaction.businessName}>
                                    <Card.Content style={{flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                                        <View style={{flexDirection: 'row'}}>
                                        {transaction.businessName === "Cinama City" ? (
                                            <Avatar.Image
                                            size={50}
                                            source={require('../assets/Cinema_City.png')}
                                            style={{ backgroundColor: 'black', marginRight: 10 }}
                                            />
                                        ) : (
                                            <Avatar.Icon
                                            icon={getAvatarIconAndColor(transaction.type).icon}
                                            color="black"
                                            size={50}
                                            style={{
                                                backgroundColor: getAvatarIconAndColor(
                                                transaction.type
                                                ).backgroundColor,
                                                marginRight: 10,
                                            }}
                                            />
                                        )}
                                            <View style={{flexDirection: 'column'}}>
                                                <Text style={{color: 'white', fontSize: 16}}>{transaction.businessName}</Text>
                                                <Text style={{color: 'grey'}}>{transaction.type}</Text>
                                            </View>
                                        </View>
                                        <Text style={{color: 'white', fontSize: 18}}>{transaction.amount}</Text>
                                    </Card.Content>
                                    <View style={styles.divider} />
                                </React.Fragment>
                            ))}
                        </ScrollView>
                    </Card>
                </>
            )}
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