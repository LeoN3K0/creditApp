import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, Text, useTheme } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import Svg, { Text as SvgText, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';

function RainbowCard() {
  return (
    <Card style={{ width: 155 }}>
      <LinearGradient
        colors={['#f9e979', '#ff925c', '#f083a9', '#7dd6c5']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.gradient}
      >
        <Card.Content>
          <Card
            mode="contained"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              marginLeft: -14,
              marginRight: -14,
              marginTop: 2,
              paddingBottom: 3,
              borderRadius: 10,
            }}
          >
            <View style={{ marginLeft: 10, marginRight: 10 }}>
              <View
                style={{
                  paddingTop: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 2,
                }}
              >
                <Text style={{ color: 'white', fontSize: 14, marginRight: 20 }}>Creda</Text>
                <View style={{ paddingLeft: 20 }}>
                  <FontAwesome name="cc-visa" size={20} color="white" />
                </View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View
                  style={{
                    borderRadius: 10,
                    overflow: 'hidden',
                  }}
                >
                  <Svg width="100" height="40">
                    <Defs>
                      <SvgLinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <Stop offset="0%" stopColor="#f9e979" />
                        <Stop offset="25%" stopColor="#ff925c" />
                        <Stop offset="50%" stopColor="#f083a9" />
                        <Stop offset="100%" stopColor="#7dd6c5" />
                      </SvgLinearGradient>
                    </Defs>
                    <SvgText
                      x="0"
                      y="30"
                      fill="url(#grad)"
                      fontSize="20"
                      fontWeight="bold"
                    >
                      Rainbow
                    </SvgText>
                  </Svg>
                </View>
                <Avatar.Icon icon="tablet" size={45} style={{ backgroundColor: 'transparent', paddingLeft: 20, marginLeft: -20 }} />
              </View>
            </View>
          </Card>
        </Card.Content>
      </LinearGradient>
    </Card>
  );
}

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 10,
    overflow: 'hidden',
    height: 85,
  },
});

export default RainbowCard;
