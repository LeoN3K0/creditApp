import React, {useState, useEffect} from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Card, IconButton, Text, useTheme } from "react-native-paper";
import PercentCircle from './PercentCircle';
import { useMonthContext } from '../MonthContext';
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

function SpendingSummary() {
    const theme = useTheme();
    const { selectedMonth } = useMonthContext();
    const [totalSpendAmount, setTotalSpendAmount] = useState(0);
    const [categoryTotals, setCategoryTotals] = useState();
    const apiBaseUrl = process.env.EXPO_PUBLIC_BASE_URL;

    const spendingCategories = [
        { name: 'Entertainment', color: '#89fee3' },
        { name: 'Households', color: '#ff915a' },
        { name: 'Food', color: '#fbf662' },
        { name: 'Taxes', color: '#f083a9' },
      ];

      const mapCategoryToColor = (categoryName) => {
        const foundCategory = spendingCategories.find(category => category.name === categoryName);
        return foundCategory ? foundCategory.color : ''; // Return the color or an empty string if not found
    };

    const fetchTransactions = () => {
        axios.get(`${apiBaseUrl}transactions`)
            .then(response => {
            const monthTransactions = response.data.filter(transaction => transaction.month === selectedMonth);

            const totalSpendAmount = monthTransactions.reduce((total, transaction) => {
                const amount = parseFloat(transaction.amount.replace(' PLN', ''));
                return total + amount;
            }, 0);

            setTotalSpendAmount(totalSpendAmount);
            
            const categoryTotals = spendingCategories.map(category => {
                const categoryTransactions = monthTransactions.filter(transaction => transaction.type === category.name);
                const totalAmount = categoryTransactions.reduce((total, transaction) => {
                    const amount = parseFloat(transaction.amount.replace(' PLN', ''));
                    return total + amount;
                }, 0);
                return { name: category.name, total: totalAmount };
                });

                const categoryTotalsWithColors = categoryTotals.map(category => ({
                    ...category,
                    color: mapCategoryToColor(category.name),
                }));
        
                setCategoryTotals(categoryTotalsWithColors);

            })

            .catch(error => {
            console.error('Error fetching transactions:', error);
            });
        };
    
      useEffect(() => {
        fetchTransactions();  
      }, [selectedMonth]);
  

    return(
        <View style={styles.container}> 
        <Text style={{color: 'white', fontSize: 16}}>Spending summary</Text>
        <Card style={{marginRight: 20, marginTop: 10, height: 130, backgroundColor: '#181818'}}>
        <ScrollView style={{ marginBottom: 10 }}> 
        {categoryTotals && categoryTotals.map((category, index) => (           
        <React.Fragment key={index}>
            <Card.Content style={{marginVertical: 10}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View>
                <Text style={{color: 'white', fontSize: 16}}>{category.name}</Text>
                <Text style={{color: 'grey', fontSize: 14}}>{category.total} PLN</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <PercentCircle size={65} color={category.color} percent={totalSpendAmount ? Math.round((category.total / totalSpendAmount) * 100) : 0} />
                <IconButton icon='chevron-right' iconColor="white" size={35} style={{marginRight: -10, alignSelf: 'center'}} />
                </View>
                </View>
            </Card.Content>
            <View style={styles.divider} /> 
        </React.Fragment>
        ))}        
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