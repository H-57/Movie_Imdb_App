import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {NavigationStackProp} from 'react-navigation-stack';
import Slider from '../components/Slider';
type Props = {
    navigation: NavigationStackProp<{userId: string}>;
    route:{params:{data:any[]}}
  };


const All = ({navigation,route}:Props) => {
  const {data}=route.params;
 
  return (
    <View>
        <Text style={{fontSize:20,fontWeight:'bold',padding:10}}>All Movies</Text>
  <Slider  navigation={navigation}  data={data} style={{marginTop: 10,marginBottom:50}} imgStyle={styles.img} />
  
    </View>
  )
}

export default All
const styles=StyleSheet.create({
    img:{height: 200,
       resizeMode:'stretch',
       borderRadius:10,
      
    }
})