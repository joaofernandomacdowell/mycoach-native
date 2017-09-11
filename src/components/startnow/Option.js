import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { optionStyles } from '../../styles/startnow';


const Option = (props) => (
  <View style={optionStyles.container}>
    {props.children}
  </View>
);

export default Option;
