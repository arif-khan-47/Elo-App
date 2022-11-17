import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { ScrollView } from 'react-native'
import InterestMenu from '../../components/ProfileSetup/InterestMenu'
import NextSkipButton from '../../components/ProfileSetup/NextSkipButton'


const Interest = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.13 }}>
                <Text style={tw`text-lg m-auto mx-5`}>Choose your interest and get the best video recommendations.</Text>
            </View>
            <ScrollView style={{ flex: 0.7 }}>
                <InterestMenu />
            </ScrollView>
            <View style={{ flex: 0.17 }}>
                {/* <NextSkipButton skipTo='Gender' nextTo='Gender'/> */}
                <View style={[styles.container, tw`my-auto flex-row`]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Gender')}>
                        <View style={[tw`bg-[#FFEDF0] py-5 px-15 rounded-full`]}>
                            <Text style={tw`text-[#FF4D67]`}>Skip</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Gender')}>
                        <View style={[tw`bg-[#FF4D67] py-5 px-15 rounded-full`]}>
                            <Text style={tw`text-white`}>Continue</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Interest

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-evenly'
    }
})