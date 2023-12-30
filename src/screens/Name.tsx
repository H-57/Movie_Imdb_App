import {
    View,
    Text,
    TextInput,
    StyleSheet,
    
    FlatList,
    Alert,
 
    
  } from 'react-native';
  import React, {useState} from 'react';
  import CustomButton from '../components/CustomButton';
  
  const App = () => {
    const [Name, setName] = useState<string>('');
    const [List, setList] = useState<string[]>([]);
  
    return (
      <View>
        <Text style={{fontWeight:'bold',marginTop:20,fontSize:20,textAlign:'center'}}>Todo-List</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            placeholder="Enter your todo list"
            style={styles.input}
            onChangeText={(value: string) => setName(value)}
          />
  
          <CustomButton
            title="Add Todo"
            style={styles.button}
            onPress={() => {
            
              if (!Name ){
                Alert.alert("Error","todo is Empty");
                return
              }
              if(List.indexOf(Name)==-1){

                setList([...List, Name]);
              }
            
              else{
                Alert.alert("Error","already added")
              }
              
            }}
          />
        </View>
    
        <FlatList
          data={List}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <Text style={styles.items}>{item}</Text>}
        />
      </View>
    );
  };
  
  export default App;
  const styles = StyleSheet.create({
    input: {
      backgroundColor: 'gray',
      color: 'white',
      margin: 5,
      width: '60%',
      borderRadius:10
    },
    list: {
      backgroundColor: 'tomato',
      padding: 10,
    },
    items: {
      backgroundColor: 'hotpink',
      fontSize: 20,
      borderRadius: 25,
      margin: 5,
      padding: 5,
      textAlign: 'center',
    },
    button: {backgroundColor: 'tomato',
     width: '40%',
      margin: 5,
      borderRadius:20,
      
  
    },
  });
  