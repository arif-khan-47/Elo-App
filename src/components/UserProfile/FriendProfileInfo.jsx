import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';

const FriendProfileInfo = ({ username, avatar, isfollow, follower, following }) => {
  return (
    <View>
      {
        username ? (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingVertical: 20 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={{ uri: avatar }}
                style={{
                  resizeMode: 'cover',
                  backgroundColor: '#FF4D67',
                  width: 80,
                  height: 80,
                  borderRadius: 100,

                }}
              />
              <Text style={{ paddingVertical: 5 }}>
                {username}
              </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#FF4D67' }}>100</Text>
              <Text>Posts</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#FF4D67' }}>{follower}</Text>
              <Text>Followers</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#FF4D67' }}>{following}</Text>
              <Text>Following</Text>
            </View>
          </View>
        ) : null
      }
    </View>
  )
}

export default FriendProfileInfo



export const ProfileButtons = ({ id }) => {
  const [follow, setFollow] = useState(follow)
  return (
    <>
      {
        id === 0 ? null : (
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => setFollow(!follow)} style={{ width: '42%' }}>
              <View style={{ width: '100%', height: 35, borderRadius: 5, backgroundColor: follow ? 'white' : '#FF4D67', borderWidth: follow ? 1 : 0, borderColor: '#FF4D67', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: follow ? '#FF4D67' : 'white', fontWeight: follow ? 'normal' : 'bold' }}>
                  {follow ? "Following" : "Follow"}
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{ width: '42%', height: 35, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#FF4D67', borderRadius: 5 }}>
              <Text style={{ color: '#FF4D67' }}>Message</Text>
            </View>
            <View style={{ width: '10%', height: 35, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#FF4D67', borderRadius: 5 }}>
              <Feather name='chevron-down' style={{ fontSize: 20, color: '#FF4D67' }} />
            </View>
          </View>
        )
      }
    </>
  )
}

const styles = StyleSheet.create({})