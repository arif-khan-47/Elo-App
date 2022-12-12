import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import tw from 'twrnc'
// import AsyncStorage from '@react-native-async-storage/async-storage';


//Screens
import Start from './src/screen/Start';
import Introduction from './src/screen/introduction/Introduction';
import StatusView from './src/components/Home/StatusView'
import HomeScreen from './src/screen/HomeScreen';
import FriendProfile from './src/screen/FriendsPage/FriendProfile';
import EditProfile from './src/screen/FriendsPage/EditProfile';
import Onboarding from './src/screen/introduction/Onboarding';
import LoginHero from './src/screen/Login/LoginHero';

const Stack = createStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Onboardings' screenOptions={{ headerStyle: tw`bg-transparent dark:bg-black shadow-none`, headerTitleStyle: tw`font-bold text-2xl` }}>
          {/* <Stack.Screen name='Start' component={Start} options={{ headerShown: false }} /> */}

          {/* Splash Screen  */}
          <Stack.Screen name='Splash' component={Introduction} options={{ headerShown: false }} />

          {/* Onboarding screen  */}
          <Stack.Screen name='Onboardings' component={Onboarding} options={{ headerShown: false }} />
          
           {/*Login and sign up pages*/}
           <Stack.Screen name='LoginHero' component={LoginHero} options={{ headerShown: false }} />



          <Stack.Screen name='Status' component={StatusView} options={{ headerShown: false, title: "Story" }} />
          <Stack.Screen name='FriendProfile' component={FriendProfile} options={{ headerShown: false }} />
          <Stack.Screen name='EditProfile' component={EditProfile} options={{ headerShown: false }} />
          <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  )
}

export default App





