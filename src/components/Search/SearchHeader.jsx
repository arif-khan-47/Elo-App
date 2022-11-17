import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const SearchHeader = () => {
  return (
    <View style={tw`bg-gray-200 mx-5 my-1 flex-row rounded-lg border-gray-300 border`}>
    <Image
        style={tw`w-5 h-5 mx-2 my-auto`}
        source={{
            uri: 'https://img.icons8.com/ios-glyphs/90/FF4D67/search--v1.png',
        }}
    />
    <TextInput
        style={tw`w-full`}
        placeholder="Search"
    // style={styles.input}
    // onChangeText={setPassword}
    // value={password}
    />
</View>
  )
}

export default SearchHeader

const styles = StyleSheet.create({})