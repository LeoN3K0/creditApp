import React from 'react';
import { View, StyleSheet } from 'react-native';

const CustomTabBarCenter = () => {
  return <View style={styles.tabBarCenter} />;
};

const styles = StyleSheet.create({
  tabBarCenter: {
    height: 6,         // Set the height to your desired value (e.g., 4)
    width: '50%',         // Set the width to your desired value (e.g., 30)
    borderRadius: 2,   // Set the border radius to half of the height to create a rounded bar
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,         // Set the position to be at the very bottom of the screen
    alignSelf: 'center',
  },
});

export default CustomTabBarCenter;
