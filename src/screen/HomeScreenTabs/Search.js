import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import SearchHeader from '../../components/Search/SearchHeader'


const Search = () => {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={[{flex:0.1}, tw``]}>
          <SearchHeader/>
          <View style={tw`h-[1px] bg-gray-200`}></View>
        </View>
        <ScrollView style={{flex:0.9}}>
        {/* <View style={{flex:0.1, backgroundColor:'blue'}}></View>
        <View style={{flex:0.1, backgroundColor:'yellow'}}></View>
        <View style={{flex:0.1, backgroundColor:'green'}}></View>
        <View style={{flex:0.1, backgroundColor:'gray'}}></View>
        <View style={{flex:0.1, backgroundColor:'red'}}></View>
        <View style={{flex:0.1, backgroundColor:'blue'}}></View>
        <View style={{flex:0.1, backgroundColor:'yellow'}}></View>
        <View style={{flex:0.1, backgroundColor:'green'}}></View> */}
        {/* <View style={{flex:0.1, backgroundColor:'gray'}}></View> */}
        </ScrollView>
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({})