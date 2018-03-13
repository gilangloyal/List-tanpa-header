import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Header = (props) => {
  const { textStyle, backHeader } = styles;
  return (
    <View style={backHeader}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};
const styles = {
    backHeader: {
      backgroundColor: '#E91E63',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      position: 'relative',
      marginTop: 10
    },
    textStyle: {
      fontSize: 25,
      color: '#fff',
      textAlign: 'center'
    }
}

export default Header;
