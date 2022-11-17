import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Image } from 'react-native'

const LoginHero = ({ navigation }) => {
    return (
        <View style={[{ flex: 1 }, tw`m-auto`]}>
            <View style={{ flex: 0.9 }}>

                <Image
                    style={tw`w-50 h-50 mx-auto`}
                    source={{
                        uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1667639054/ELO/5_Light_lets_in-removebg-preview_ea40jb.png',
                    }}
                />
                <Text style={[{ fontWeight: "semibold" }, tw`text-center mx-auto text-4xl text-black my-3 font-bold`]}>Let's you in</Text>
                <TouchableOpacity onPress={() => {console.log('Continue with Facebook');}} >
                    <View style={tw`bg-gray-200 py-3 px-15 my-1 flex-row rounded-lg border-gray-300 border`}>
                        <Image
                            style={tw`w-6 h-6 mr-2`}
                            source={{
                                uri: 'https://img.icons8.com/fluency/90/null/facebook-new.png',
                            }}
                        />
                        <Text style={tw`my-auto`}> Continue with Facebook</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {console.log('Continue with Google');}}>
                    <View style={tw`bg-gray-200 py-3 px-15 my-1 flex-row rounded-lg border-gray-300 border`}>
                        <Image
                            style={tw`w-6 h-6 mr-2`}
                            source={{
                                uri: 'https://img.icons8.com/color/90/null/google-logo.png',
                            }}
                        />
                        <Text style={tw`my-auto`}> Continue with Google</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {console.log('Continue with Apple');}}>
                    <View style={tw`bg-gray-200 py-3 px-15 my-1 flex-row rounded-lg border-gray-300 border`}>
                        <Image
                            style={tw`w-6 h-6 mr-2`}
                            source={{
                                uri: 'https://img.icons8.com/ios-glyphs/90/null/mac-os.png',
                            }}
                        />
                        <Text style={tw`my-auto`}> Continue with Apple</Text>
                    </View>
                </TouchableOpacity>


                <View style={tw`mx-auto my-3 flex-row`}>
                    <View style={tw`h-[2px] my-auto w-35 mx-[1px] bg-gray-200 rounded-full `}></View>
                    <Text style={tw`mx-1`}>or</Text>
                    <View style={tw`h-[2px] my-auto w-35 mx-[1px] bg-gray-200 rounded-full `}></View>
                </View>



                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={tw`bg-[#FF4D67] mx-2 rounded-full h-12`}>
                        <Text style={[tw`text-white mx-auto my-auto`]}>Sign in with password</Text>
                    </View>
                </TouchableOpacity>
            </View>


            <View style={[{ flex: 0.1 }, tw`mx-auto flex-row`]}>
                <Text style={tw``}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <View>
                        <Text style={tw`text-[#FF4D67]`}>Sign up</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginHero


