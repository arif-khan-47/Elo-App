import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProfileHeader from '../../components/UserProfile/ProfileHeader'
import ProfileInfo from '../../components/UserProfile/ProfileInfo'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PostGrid from '../../components/UserProfile/PostGrid'
import ReelGrid from '../../components/UserProfile/ReelGrid'
import { scale } from 'react-native-size-matters';

const Tab = createMaterialTopTabNavigator();

const UserProfile = () => {
  return (
    <SafeAreaView style={[{ flex: 1 }, tw`relative`]}>
      <View style={[{ flex: 0.1 }, tw``]}>
        <ProfileHeader />
        <View style={tw`h-[1px] bg-gray-200`}></View>
      </View>
      
      <ScrollView style={{ flex: 0.9 }}>
        <ProfileInfo />
        <View style={[tw`h-[1px] bg-gray-300`]}></View>
          <Tab.Navigator style={[ tw``, {flex:1}]} screenOptions={{swipeEnabled: true, tabBarActiveTintColor: '#FF4D67', tabBarInactiveTintColor:'grasy', tabBarShowLabel:false, tabBarPressColor:'#FF4D67',tabBarStyle:tw`shadow-none bg-gray-100`,tabBarIndicatorStyle:tw`bg-[#FF4D67]`}}>
          <Tab.Screen name="Grid" component={PostGrid} options={{ tabBarIcon: ({ focused, color }) => <MaterialCommunityIcons name='grid' focused={focused} size={25} color={color} /> }} />
          <Tab.Screen name="Reels" component={ReelGrid} options={{ tabBarIcon: ({ focused, color }) => <MaterialIcons name='video-library' focused={focused} size={25} color={color} /> }}/>
        </Tab.Navigator>
        <Text>gdhjbklhf;h</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default UserProfile

const styles = StyleSheet.create({})