import {FlatList, Image, StyleSheet, Text, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';

type Props = {
  data: any[];
  style: object;
  horizontal?: boolean;
  imgStyle?: any;
  pagingEnabled?:boolean
  navigation:NavigationStackProp<{userId: string}>
};

const Slider = ({data, style, horizontal= false, imgStyle,pagingEnabled=false,navigation}: Props) => {


  
  if (!data ){
    return <Text>No Movie Found</Text>;
  }

  return (
    <FlatList
    pagingEnabled={pagingEnabled}
      style={style}
      horizontal={horizontal}
      data={data}
      keyExtractor={(item,index) => item.Title+index}
      renderItem={({item}) => {
        if(item.Poster==='N/A')return null
        
        return(
          <TouchableOpacity onPress={()=>navigation.navigate('Details',{id:item.imdbID})}>

          
        <Image
          style={[styles.img, imgStyle]} 
          source={{uri:item?.Poster}}
        />
        </TouchableOpacity>
      )}}
    />
  );
};

export default Slider;
const styles = StyleSheet.create({
  img: {
    margin: 10,
    
   
  },
});
