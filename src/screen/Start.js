import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import tw from 'twrnc'
import { createStackNavigator } from '@react-navigation/stack';


//Screens
import Introduction from './introduction/Introduction';
import Onboarding from './introduction/Onboarding';
import LoginHero from './Login/LoginHero'
import SignIn from './Login/SignIn';
import LogIn from './Login/Login';
import Interest from './ProfileSetup/Interest';
import Gender from './ProfileSetup/Gender';
import DOB from './ProfileSetup/DOB';
import Profile from './ProfileSetup/Profile';
import PIN from './ProfileSetup/PIN';
import Finger from './ProfileSetup/Finger';
import ForgetPswdHero from './ForgetPassword/ForgetPswdHero';
import OTP from './ForgetPassword/OTP';
import NewPswd from './ForgetPassword/NewPswd';




const Stack = createStackNavigator();

function Start() {
    return (

        <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerStyle: tw`bg-transparent dark:bg-black shadow-none`, headerTitleStyle: tw`font-bold text-2xl` }}>
            {/* Completed */}
            <Stack.Screen name='Splash' component={Introduction} options={{ headerShown: false }} />
            <Stack.Screen name='Onboardings' component={Onboarding} options={{ headerShown: false }} />
            {/* Connect to Backend */}
            <Stack.Screen name='LoginHero' component={LoginHero} options={{ headerShown: false }} />
            <Stack.Screen name='Signup' component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={LogIn} options={{ headerShown: false }} />
            {/* Adding Logic */}
            <Stack.Screen name='Interest' component={Interest} options={{ headerShown: true, title: "Choose Your Interest" }} />

            {/* Connect to Backend */}
            <Stack.Screen name='Gender' component={Gender} options={{ headerShown: true, title: "Tell Us About Yourself" }} />
            <Stack.Screen name='DOB' component={DOB} options={{ headerShown: true, title: "When is Your Birthday?" }} />
            {/* Connect to Backend & adding logic*/}
            <Stack.Screen name='Profile' component={Profile} options={{ headerShown: true, title: "Fill Your Profile" }} />
            <Stack.Screen name='PIN' component={PIN} options={{ headerShown: true, title: "Create New PIN" }} />
            <Stack.Screen name='Finger' component={Finger} options={{ headerShown: true, title: "Set Your Fingerprint" }} />
            <Stack.Screen name='ForgetPswdHero' component={ForgetPswdHero} options={{ headerShown: true, title: "Forget Password" }} />
            <Stack.Screen name='OTP' component={OTP} options={{ headerShown: true, title: "Forget Password" }} />
            <Stack.Screen name='NewPswd' component={NewPswd} options={{ headerShown: true, title: "Create New Password" }} />



        </Stack.Navigator>
    )
}


export default Start
