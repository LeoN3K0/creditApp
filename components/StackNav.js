import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNav from './TabNav';

const Stack = createNativeStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='MainHome' component={TabNav} 
      options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default StackNav;
