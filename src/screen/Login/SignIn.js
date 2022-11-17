import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image, StyleSheet } from 'react-native'
import { scale,} from 'react-native-size-matters';
import * as React from 'react'
import { Checkbox } from 'react-native-paper';
import tw from 'twrnc'


const SignIn = ({navigation}) => {
    const [checked, setChecked] = React.useState(false);
    return (
        <>

            <Text style={tw`text-4xl left-0 font-bold text-black mt-15 mx-5`}>Create your {'\n'}Account</Text>
            <View style={tw`bg-gray-200 mx-5 my-1 flex-row rounded-lg border-gray-300 border mt-10`}>
                <Image
                    style={tw`w-5 h-5 mx-2 my-auto`}
                    source={{
                        uri: 'https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/96/null/external-mail-accounting-tanah-basah-glyph-tanah-basah.png',
                    }}
                />
                <TextInput
                    style={tw`w-full`}
                    placeholder="Email"
                // style={styles.input}
                // onChangeText={setPassword}
                // value={password}
                />
            </View>


            <View style={tw`bg-gray-200 mx-5 my-1 mt-2 flex-row rounded-lg border-gray-300 border`}>
                <Image
                    style={tw`w-5 h-5 mx-2 my-auto`}
                    source={{
                        uri: 'https://img.icons8.com/material-rounded/24/null/lock--v1.png',
                    }}
                />
                <TextInput
                    style={tw`w-full`}
                    placeholder="Password"
                    secureTextEntry={true}
                // style={styles.input}
                // onChangeText={setPassword}
                // value={password}
                />
            </View>
            <View style={tw`flex-row mx-auto my-2`}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                    color={'#FF4D67'}
                    uncheckColor={'#FF4D67'}
                />
                <Text style={tw`my-auto`}>Remember me</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Interest')}>
                <View style={tw`bg-[#FF4D67] mx-5 rounded-full h-12`}>
                    <Text style={tw`text-white mx-auto my-auto`}>Sign up</Text>
                </View>
            </TouchableOpacity>


            <View style={tw`mx-auto my-3 flex-row`}>
                <View style={tw`h-[2px] my-auto w-25 mx-[1px] bg-gray-200 rounded-full `}></View>
                <Text style={tw`mx-1`}> or continue with </Text>
                <View style={tw`h-[2px] my-auto w-25 mx-[1px] bg-gray-200 rounded-full `}></View>
            </View>

            <View style={tw`flex-row justify-evenly mx-10 my-1`}>
                <TouchableOpacity onPress={() => {console.log('Continue with Facebook');}}>
                    <View style={tw`bg-gray-200 px-5 py-3 rounded-lg border-gray-300 border`}>
                        <Image
                            style={tw`w-6 h-6`}
                            source={{
                                uri: 'https://img.icons8.com/fluency/90/null/facebook-new.png',
                            }}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {console.log('Continue with Google');}}>
                    <View style={tw`bg-gray-200 px-5 py-3 rounded-lg border-gray-300 border`}>
                        <Image
                            style={tw`w-6 h-6`}
                            source={{
                                uri: 'https://img.icons8.com/color/90/null/google-logo.png',
                            }}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {console.log('Continue with Apple');}}>
                    <View style={tw`bg-gray-200 px-5 py-3 rounded-lg border-gray-300 border`}>
                        <Image
                            style={tw`w-6 h-6`}
                            source={{
                                uri: 'https://img.icons8.com/ios-glyphs/90/null/mac-os.png',
                            }}
                        />
                    </View>
                </TouchableOpacity>
            </View>




            <View style={tw`mx-auto flex-row`}>
                <Text style={[style.button, tw``]}>Already have an account? </Text>
                <TouchableOpacity>
                    <View>
                        <Text style={[style.button, tw`text-[#FF4D67]`]} onPress={()=>navigation.navigate('Login')}>Sign in</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default SignIn



const style = StyleSheet.create({
    button: {
        marginTop:scale(90)
    }
  })
  
