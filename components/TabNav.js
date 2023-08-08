import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import HomeScreen from '../screens/HomeScreen';
import CustomTabBarCenter from './CustomTabBarCenter';
import CustomHeader from './CustomHeader';

const Tab = createBottomTabNavigator();

function TabNav() {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          tabBarIcon: ({ color, focused }) => {
            const iconName =
              route.name === 'Home'
                ? 'home-variant-outline'
                : route.name === 'Arrow'
                ? 'arrow-expand'
                : route.name === 'Your Cards'
                ? 'credit-card-scan-outline'
                : route.name === 'Cards'
                ? 'credit-card-outline'
                : 'menu';

            if (focused) {
              return (
                <View style={styles.iconBackground}>
                  <LinearGradient
                    colors={['#fef77f', '#d979a0', '#71ccbc', '#f48d5c']} // Change gradient colors as needed
                    style={styles.gradientBorder}
                  >
                    <View style={[styles.iconContainer, { backgroundColor: '#181818' }]}>
                      <MaterialCommunityIcons name={iconName} size={24} color="white" />
                    </View>
                  </LinearGradient>
                </View>
              );
            }

            return <MaterialCommunityIcons name={iconName} size={24} color="lightgrey" />;
          },
          tabBarLabel: '', // Remove the label for all tabs
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'lightgrey',
          tabBarStyle: styles.tabBar,
        })}
      >
        {/* Add the tab screens as before */}
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Arrow" component={HomeScreen} />
        <Tab.Screen name="Your Cards" component={HomeScreen} options={{
            header: () => <CustomHeader title="Your cards" />,
          }} />
        <Tab.Screen name="Cards" component={HomeScreen} />
        <Tab.Screen name="Profile" component={HomeScreen} />
      </Tab.Navigator>
      <CustomTabBarCenter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    marginBottom: 0,
  },
  tabBar: {
    backgroundColor: '#181818',
    borderTopWidth: 0,
    height: 80,
  },
  iconBackground: {
    position: 'absolute',
    top: -15,
    backgroundColor: '#181818',
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientBorder: {
    width: 65,
    height: 65,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabNav;
