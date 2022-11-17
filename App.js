import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import tw from 'twrnc'
// import AsyncStorage from '@react-native-async-storage/async-storage';


//Screens
import Start from './src/screen/Start';
import HomeScreen from './src/screen/HomeScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerStyle: tw`bg-transparent dark:bg-black shadow-none`, headerTitleStyle: tw`font-bold text-2xl`}}>
          <Stack.Screen name='Start' component={Start} options={{ headerShown: false }} />
          <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  )
}

export default App





