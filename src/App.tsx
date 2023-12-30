import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Search from './screens/Search';
import AllMovie from './screens/All';
import Todo from './screens/Name';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import Details from './screens/Details';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
// const stackNav=()=>{
//   return(
// <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}
//         initialRouteName="Home">
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Search" component={Search} />
//       </Stack.Navigator>
//   )
// }
const App = () => {
  
  const scheme = useColorScheme();
  const MyTheme = {
    dark: false,
    colors: {
      primary: 'hotpink',
      background: 'rgb(20, 20, 20)',
      card: 'rgb(20, 20, 20)',
      text: 'white',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };
  return (
    <NavigationContainer    theme={scheme === 'dark' ? MyTheme : DefaultTheme}>
      <StatusBar backgroundColor={MyTheme.colors.background} />
      
      
      <Tab.Navigator

screenOptions={{
  headerShown: false,
  
      
        
      }}
      initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({color, size}) => <Icon name="home" color={color} size={size} />,}}/>
        <Tab.Screen name="Search" component={Search} options={{tabBarIcon: ({color, size}) => <Icon name="search" color={color} size={size} />,}}/>
      <Tab.Screen name='All' component={AllMovie}  options={{ tabBarButton: () => null }}  />
      <Tab.Screen name='Details' component={Details}  options={{ tabBarButton: () => null }}  />
      <Tab.Screen name='Todo' component={Todo}  options={{tabBarIcon: ({color, size}) => <Icon name="edit" color={color} size={size} />,}}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
