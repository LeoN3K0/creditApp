import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Circle, G, Svg, Text as SvgText } from 'react-native-svg';

const PercentCircle = ({ size, color, percent }) => {
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = ((100 - percent) / 100) * circumference;

  const textX = radius;
  const textY = radius;
  const textStyle = { fontSize: 18, fontWeight: 'bold', fill: 'white', textAnchor: 'middle' };

  return (
    <View style={{ alignItems: 'center', marginRight: -10 }}>
      <Svg width={size} height={size}>
        <G transform={{ translate: `5, 5` }}>
          {/* Gray Circle */}
          <Circle
            r={radius}
            cx={radius}
            cy={radius}
            stroke="grey"
            strokeWidth="3"
            fill="transparent"
          />

          {/* Colored Progress */}
          <Circle
            r={radius}
            cx={radius}
            cy={radius}
            stroke={color}
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={progressOffset}
            strokeLinecap="round"
            fill="transparent"
            transform={`rotate(-90 ${radius} ${radius})`}
          />

          {/* Percentage Text */}
          <SvgText x={textX} y={textY+5} style={textStyle}>
            {`${percent}%`}
          </SvgText>
        </G>
      </Svg>
    </View>
  );
};

export default PercentCircle;
