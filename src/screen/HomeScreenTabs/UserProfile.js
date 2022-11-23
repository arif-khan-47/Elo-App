import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
import Profile, { ProfileButtons } from '../../components/UserProfile/FriendProfileInfo';
import ReadMore from '@fawazahmed/react-native-read-more';
const Tab = createMaterialTopTabNavigator();

const UserProfile = () => {
  return (
    <>
      <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
        <View style={{ paddingVertical: 12 }}>
          <ProfileHeader username='username' />
        </View>
        <View style={tw`h-[1px] bg-gray-200`}></View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ width: '100%' }}>
            <Profile
              username='arif_khan'
              avatar='https://img.icons8.com/fluency-systems-filled/144/FF4D67/guest-male.png'
              follower={98}
              following={78}
            />
          </View>
          <ProfileButtons id={0} username='arif_khan' avatar='https://img.icons8.com/fluency-systems-filled/144/FF4D67/guest-male.png'/>
          {/* <View style={{ marginTop: -15, paddingHorizontal: 10 }}>
            <ReadMore>
              This is Bio hsgyigsi cbidhckdhc hcbdhfcuihi huidhuihdui hhduhuidhviul jbvjidbvi cdklcnd djvjod vjdovjo vjvjfv vjljvd dk cjdv dkvkvjv vk jjc jkjck; jijvfjvifjvifvjfiovjfipv fjiv jfvofj j cjoj coj vuv ivjfkvjifv fjvifuvfiv jk iv
            </ReadMore>
          </View>
          <View style={{ justifyContent: 'center', width: '100%', alignItems: 'center', marginVertical: 8 }}>
            <TouchableOpacity style={{ width: '80%', borderWidth: 0.5, borderColor: '#FF4D67', alignItems: 'center', paddingVertical: 10, borderRadius: 5 }}>
              <Text style={{ color: '#FF4D67' }}>
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View> */}
        </ScrollView>
      </View>
    </>

  )
}

export default UserProfile

const styles = StyleSheet.create({})