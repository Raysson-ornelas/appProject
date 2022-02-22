import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Home, Rastreio } from './views';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Fast and Furious",
            headerStyle: {backgroundColor: '#F58634'},
            headerTintColor: '#333',
            headerTitleAlign:'center',
            headerTitleStyle:{fontWeight:'bold'}
          }}
        />
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen name="Rastreio" component={Rastreio} />
      </Stack.Navigator>
      <StatusBar backgroundColor='#FFF' translucent={false}/>
    </NavigationContainer>
  );
}
