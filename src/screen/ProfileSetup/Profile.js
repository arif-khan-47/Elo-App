import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
// https://res.cloudinary.com/drtldr4nl/image/upload/v1668000159/ELO/image-removebg-preview_erkqtn.png
const Profile = ({navigation}) => {
  return (
    <View style={[{ flex: 1 }]}>
      <View style={{ flex: 0.4 }}>
        <View style={tw`m-auto bg-gray-200 rounded-full p-3`}>
          <TouchableOpacity>
            <Image
              style={tw`h-25 w-25`}
              source={{
                uri: 'https://img.icons8.com/material-rounded/384/d1d5db/user.png'
              }}
            />
            <View>
              <Image
                style={tw`h-8 w-8 absolute ml-22 -mt-5 bg-white rounded-lg`}
                source={{
                  uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1668000159/ELO/image-removebg-preview_erkqtn.png'
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={[{ flex: 0.43}, tw`m-5`]}>
      <View style={[tw`bg-gray-200 rounded-xl my-2`]}>
          <TextInput style={tw`px-5`} placeholder='Full Name' />
      </View>

      <View style={[tw`bg-gray-200 rounded-xl my-2`]}>
          <TextInput style={tw`px-5`} placeholder='Nick Name' />
      </View>

      <View style={[tw`bg-gray-200 rounded-xl my-2 flex-row justify-between`]}>
          <TextInput style={tw`px-5`} placeholder='Email' />
          <Image
                    style={tw`w-5 h-5 mx-5 my-auto`}
                    source={{
                        uri: 'https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/96/null/external-mail-accounting-tanah-basah-glyph-tanah-basah.png',
                    }}
                />
      </View>

      <View style={[tw`bg-gray-200 rounded-xl my-2`]}>
          <TextInput style={tw`px-5`} placeholder='Phone Number' />
      </View>

      <View style={[tw`bg-gray-200 rounded-xl my-2 flex-row justify-between`]}>
          <TextInput style={tw`px-5`} placeholder='Address' />
          <Image
                    style={tw`w-5 h-5 mx-5 my-auto`}
                    source={{
                        uri: 'https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/384/null/external-location-library-tanah-basah-glyph-tanah-basah.png',
                    }}
                />
      </View>
     
    </ScrollView>
    <View style={[{ flex: 0.17 }, tw`my-2`]}>
                {/* <NextSkipButton skipTo='Gender' nextTo='Gender'/> */}
                <View style={[styles.container, tw`my-auto flex-row`]}>
                    <TouchableOpacity onPress={() => navigation.navigate('PIN')}>
                        <View style={[tw`bg-[#FFEDF0] py-4 px-15 rounded-full`]}>
                            <Text style={tw`text-[#FF4D67]`}>Skip</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('PIN')}>
                        <View style={[tw`bg-[#FF4D67] py-4 px-15 rounded-full`]}>
                            <Text style={tw`text-white`}>Continue</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
  }
})