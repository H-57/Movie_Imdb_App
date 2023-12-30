import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface buttonProps {
  onPress?: () => void;
  title: string;
  style:any
}
const CustomButton = ({onPress, title,style}: buttonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[style,{flex:1,alignItems:'center',justifyContent:'center'}]}>
      <Text >{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
