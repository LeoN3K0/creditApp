import React, { useState, useEffect } from 'react';
import { View, StyleSheet, PanResponder } from 'react-native';
import { Card, Text, useTheme } from 'react-native-paper';
import Svg, { Circle, Line, Text as SvgText } from 'react-native-svg';
import axios from 'axios';

const SNAP_DISTANCE = 50; // Adjust this value for snapping sensitivity
const SNAP_POINTS = [100, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000,
    5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000];

function MonthlyLimit() {
  const theme = useTheme();
  const apiBaseUrl = process.env.EXPO_PUBLIC_BASE_URL;

  const [sliderValue, setSliderValue] = useState(100);
  const [monthlyLimit, setMonthlyLimit] = useState(100);

  useEffect(() => {
    fetchMonthlyLimit();
  }, []);

  const fetchMonthlyLimit = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}settings/monthly-limit`);
      setMonthlyLimit(response.data.monthlyLimit);
      setSliderValue(response.data.monthlyLimit);
    } catch (error) {
      console.error('Error fetching monthly limit:', error);
    }
  };
  
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event) => {
      const newValue = Math.min(
        Math.max((event.nativeEvent.locationX - 20) / 335, 0),
        1
      );
      const newSliderValue = Math.round(newValue * 9900) + 100;
      const closestSnapPoint = SNAP_POINTS.reduce((prev, curr) => {
        return Math.abs(curr - newSliderValue) < Math.abs(prev - newSliderValue) ? curr : prev;
      });
      onSliderValueChange(newSliderValue, closestSnapPoint);
    },
    onPanResponderRelease: () => {
      updateMonthlyLimit(sliderValue);
    },
  });

  const updateMonthlyLimit = async (newMonthlyLimit) => {
    try {
      await axios.put(`${apiBaseUrl}settings/monthly-limit`, { newMonthlyLimit });
      setMonthlyLimit(newMonthlyLimit);
    } catch (error) {
      console.error('Error updating monthly limit:', error);
    }
  };

  const onSliderValueChange = (newValue, snapPoint) => {
    if (Math.abs(newValue - snapPoint) <= SNAP_DISTANCE) {
      setSliderValue(snapPoint);
    } else {
      setSliderValue(newValue);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', fontSize: 16, marginBottom: 10 }}>Monthly limit</Text>
      <Card style={{ marginRight: 20, backgroundColor: '#181818' }}>
        <Card.Content>
          <View
            {...panResponder.panHandlers}
            style={{ bottom: 25 }}
          >
            <Svg width="100%" height="90">
              <Line
                x1="5"
                y1="50"
                x2={20 + (310 * (sliderValue - 100)) / 9900}
                y2="50"
                stroke="#6dd87e"
                strokeWidth="4"
              />
              <Line
                x1={20 + (310 * (sliderValue - 100)) / 9900}
                y1="50"
                x2="345"
                y2="50"
                stroke="black"
                strokeWidth="3"
              />
              <Circle
                cx={10 + (310 * (sliderValue - 100)) / 9900}
                cy="50"
                r="10"
                fill="white"
              />
              {sliderValue <= 1900 ? (
                <SvgText
                  x="5"
                  y="80"
                  fill="white"
                  fontSize="12"
                  textAnchor="start"
                >
                  {sliderValue.toFixed(2)}
                </SvgText>
              ) : (
                <SvgText
                  x="5"
                  y="80"
                  fill="gray"
                  fontSize="12"
                  textAnchor="start"
                >
                  100.00
                </SvgText>
              )}
              {sliderValue >= 7100 ? (
                <SvgText
                  x="335"
                  y="80"
                  fill="white"
                  fontSize="12"
                  textAnchor="end"
                >
                  {sliderValue.toFixed(2)}
                </SvgText>
              ) : (
                <SvgText
                  x="335"
                  y="80"
                  fill="grey"
                  fontSize="12"
                  textAnchor="end"
                >
                  10'000.00
                </SvgText>
              )}
              {sliderValue >= 1900 && sliderValue <= 7100 && (
                <SvgText
                  x={20 + (325 * (sliderValue - 100)) / 9900}
                  y="82"
                  fill="white"
                  fontSize="16"
                  textAnchor="middle"
                >
                  {sliderValue.toFixed(2)}
                </SvgText>
              )}
            </Svg>
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
});

export default MonthlyLimit;
