import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Details = ({route}: {route: {params: {id: string}}}) => {
  const {id} = route.params;
  const [MovieData, setMovieData] = useState<any>();
  useEffect(() => {
   const data= fetch(`http://www.omdbapi.com/?apikey=92866a83&i=${id}`)
      .then(res => res.json())
      .then(data => setMovieData(data));
   
  }, [id]);
  if (!MovieData) {
    return <Text>Loading ...</Text>;
  }
  return (
    <ScrollView style={{marginBottom:20}} >
      <Image source={{uri: MovieData?.Poster}} style={styles.img} />
      <View style={styles.header}>
        <Text style={styles.title}>{MovieData?.Title}</Text>
        <Text style={{textAlign: 'center',margin:5}}>
          {MovieData?.Year}-{MovieData.Genre.split(',').join('/')}-
          {MovieData.Runtime}
        </Text>
        <Text style={{textAlign: 'center',margin:10}}>{MovieData?.imdbRating}  <Icon name="star" size={20} style={{color: 'yellow'}} /> </Text>
      </View >
      <View style={{position:'relative',top:-50}}>

        <Text style={{padding:10,letterSpacing:1,}}>{MovieData?.Plot}</Text>
        <Text style={{padding:10,letterSpacing:1,fontWeight:'bold'}}>ReleaseDate:<Text style={{fontWeight:'normal'}}>{MovieData.Released}</Text></Text>
        <Text style={{padding:10,letterSpacing:1,fontWeight:'bold'}}>Director:<Text style={{fontWeight:'normal'}}>{MovieData.Director}</Text> </Text>
      </View>
    </ScrollView>
  );
};

export default Details;
const styles = StyleSheet.create({
  img: {
    height: 500,
    resizeMode: 'stretch',
    marginTop: 20,
    borderRadius: 20,
  },
  header: {
    position: 'relative',
    top: -50,
    backgroundColor: 'rgba(30,10,10,0.5)',
    zIndex:5
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
