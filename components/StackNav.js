import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNav from './TabNav';
import CardSettingsHeader from './CardSettingsHeader';
import CardSettingsScreen from '../screens/CardSettingsScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import StatisticsHeader from './StatisticsHeader';

const Stack = createNativeStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='MainHome' component={TabNav} 
      options={{ headerShown: false }} />
      <Stack.Screen name='CardSettings' component={CardSettingsScreen} 
        options={{header: ({ navigation }) => (
          <CardSettingsHeader navigation={navigation} title="Card settings" />
        ),
        }} />
        <Stack.Screen name='Statistics' component={StatisticsScreen} 
        options={{header: ({ navigation }) => (
          <StatisticsHeader navigation={navigation} title="Statistics" />
        ),
        }} />
    </Stack.Navigator>
  );
}

export default StackNav;
