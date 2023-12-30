import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {NavigationStackProp} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  navigation: NavigationStackProp<{userId: string}>;
};

import React, {useEffect, useState} from 'react';
import useFetchApi from '../Hooks/FetchApi';
import Slider from '../components/Slider';

const Home = ({navigation}: Props) => {
  const {colors} = useTheme();
  const [MovieData, setMovieData] = useState<any[]>([]);
  const [Series, setSeries] = useState<any[]>([]);
  
  useEffect(() => {
   const data1= useFetchApi('pokemon').then(data => setMovieData(data.Search));
   const data2= useFetchApi('marvel').then(data => setSeries(data.Search));
  }, []);

  return (
    <View style={{padding: 10}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 25}}>
          Movie<Text style={{color: colors.primary}}>Hub.</Text>
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Icon name="search" size={30} color={colors.primary} />
        </TouchableOpacity>
      </View>
      <Text style={{marginTop: 10}}>Trending</Text>
      {MovieData && (
        <Slider
        navigation={navigation}
          horizontal={true}
          data={MovieData}
          style={{marginTop: 10}}
          imgStyle={styles.flatList1}
        />
      )}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 5,
        }}>
        <Text style={{fontWeight: 'bold'}}>Most Popular</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('All', {data: Series});
            
          }}>
          <Text>See All</Text>
        </TouchableOpacity>
      </View>
      {Series && (
        <Slider
        navigation={navigation}
          horizontal={true}
          data={Series}
          style={{marginTop: 10}}
          imgStyle={styles.flatList2}
          pagingEnabled={true}
        />
      )}
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  flatList1: {
    height: 350,
    width: 250,
    borderRadius: 20,
    resizeMode: 'stretch',
  },
  flatList2: {
    height: 175,
    width: 120,
    borderRadius: 10,
    resizeMode: 'stretch',
  },
});
