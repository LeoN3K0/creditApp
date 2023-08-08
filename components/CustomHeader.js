import React from 'react';
import { Appbar, Avatar } from 'react-native-paper';


function CustomHeader({ title }) {
  return (
    <Appbar.Header style={{ backgroundColor: '#181818' }}>
      <Appbar.Content title={title} titleStyle={{ fontWeight: 'bold', color:'white'}} />
      <Avatar.Image size={45} style={{backgroundColor: 'black'}}/>
    </Appbar.Header>
  );
}

export default CustomHeader;