import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../components/CustomButton';
import useFetchApi from '../Hooks/FetchApi';
import Slider from '../components/Slider';
import {NavigationStackProp} from 'react-navigation-stack';

type Props = {
  navigation: NavigationStackProp<{userId: string}>;
};

const Search = ({navigation}: Props) => {
  const [Search, setSearch] = useState<string>();
  const [Data, setData] = useState<any>([]);


  const SearchMovie = () => {
   const data1= useFetchApi(Search!).then(data => {
      
      if (data.Response == 'True') {
        setData(data.Search);
      } else {
        setData([]);
      }
    });
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          padding: 10,
          textAlign: 'center',
        }}>
        Search Movies
      </Text>
      
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TextInput
          placeholder="Enter your name"
          style={{
            backgroundColor: 'gray',
            color: 'white',
            margin: 5,
            width: 200,
          }}
          onChangeText={(value: string) => setSearch(value)}
        />
        <CustomButton title="Search" style={styles.btn} onPress={SearchMovie} />
      </View>
      {Data.length > 1 && 
        <Slider
        navigation={navigation}
          data={Data}
          style={{marginTop: 10, marginBottom: 100}}
          imgStyle={styles.img}
        />
      }
    </View>
  );
};

export default Search;
const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'hotpink',
    margin: 5,
  },
  img: {
    height: 200,
    borderRadius: 10,
    resizeMode: 'stretch',
  },
});
