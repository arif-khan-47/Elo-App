import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { scale, } from 'react-native-size-matters';
import React, { useState } from 'react';
import { Checkbox } from 'react-native-paper';
import tw from 'twrnc'
import { register } from '../../http/index';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

// https://www.youtube.com/watch?v=vfHekEsxgRk&ab_channel=CharismaKurniawanAji

const SignIn = ({ navigation }) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [valEmail, setValEmail] = useState(false);
    const [seePassword, setSeePassword] = useState(true);



    const emailValidations = (newEmail) => {
        let re = /\S+@\S+\.\S+/;
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

        setEmail(newEmail);
        if (re.test(newEmail) || regex.test(newEmail)) {
            setValEmail(false);
        } else {
            setValEmail(true);
        }
    };


    const checkPasswordValidity = value => {
        const isNonWhiteSpace = /^\S*$/;
        if (!isNonWhiteSpace.test(value)) {
            return 'Password must not contain Whitespaces.';
        }

        const isContainsUppercase = /^(?=.*[A-Z]).*$/;
        if (!isContainsUppercase.test(value)) {
            return 'Password must have at least one Uppercase Character.';
        }

        const isContainsLowercase = /^(?=.*[a-z]).*$/;
        if (!isContainsLowercase.test(value)) {
            return 'Password must have at least one Lowercase Character.';
        }

        const isContainsNumber = /^(?=.*[0-9]).*$/;
        if (!isContainsNumber.test(value)) {
            return 'Password must contain at least one Digit Number.';
        }

        const isValidLength = /^.{8,16}$/;
        if (!isValidLength.test(value)) {
            return 'Password must be 8-16 Characters Long.';
        }

        // const isContainsSymbol =
        //   /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
        // if (!isContainsSymbol.test(value)) {
        //   return 'Password must contain at least one Special Symbol.';
        // }

        return null;
    };



    async function signIn() {

        const checkPassword = checkPasswordValidity(password)
        if (!checkPassword) {
            console.log('Password Validation secceed')
        } else {
            return showMessage({
                message: checkPassword,
                type: "danger",
            });
        }
        try {

            const response = await register({ email, password });
            await AsyncStorage.setItem('token', response.data.token)
            try {
                // console.log(response.data.token)
            } catch (e) {
                alert(e)
            }
            // console.log(response.data.token)
            showMessage({
                message: response.data.message,
                type: "success",
            });
            navigation.navigate('Interest')


        } catch (error) {
            // console.log(error.response.data)
            showMessage({
                message: error.response.data.message,
                type: "danger",
            });
        }

    }










    // const [checked, setChecked] = useState(false);
    return (
        <>

            <FlashMessage position="top" />

            <Text style={tw`text-4xl left-0 font-bold text-black mt-15 mx-5`}>Create your {'\n'}Account</Text>
            <View style={[tw`bg-gray-200 mx-5 my-1 flex-row rounded-lg border-gray-300 border mt-10`, { borderColor: valEmail ? 'red' : 'gray' }]}>
                <Image
                    style={tw`w-5 h-5 mx-2 my-auto`}
                    source={{
                        uri: 'https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/96/null/external-mail-accounting-tanah-basah-glyph-tanah-basah.png',
                    }}
                />
                <TextInput
                    style={tw`w-full`}
                    placeholder="Email"
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoFocus={true}
                    defaultValue={email}
                    onChangeText={(newEmail) => emailValidations(newEmail)}
                // style={styles.input}
                // onChangeText={setPassword}
                // value={password}
                />
            </View>


            <View style={[tw`bg-gray-200 mx-5 my-1 mt-2 flex-row rounded-lg border-gray-300 border `, { position: 'relative', alignItems: 'center', borderColor: 'gray' }]}>
                <Image
                    style={tw`w-5 h-5 mx-2 my-auto`}
                    source={{
                        uri: 'https://img.icons8.com/material-rounded/24/null/lock--v1.png',
                    }}
                />
                <TextInput
                    style={tw`w-full`}
                    placeholder="Password"
                    secureTextEntry={seePassword}
                    value={password}
                    onChangeText={(newPass) => setPassword(newPass)}
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                // style={styles.input}
                // onChangeText={setPassword}
                // value={password}
                />
                <TouchableOpacity onPress={() => setSeePassword(!seePassword)} style={[{ position: 'absolute', right: 0, paddingRight: 10 }]}>
                    <Ionicons name={seePassword ? 'eye' : 'eye-off'} size={23} />
                </TouchableOpacity>
            </View>
            {/* <View style={tw`flex-row mx-auto my-2`}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                    color={'#FF4D67'}
                    uncheckColor={'#FF4D67'}
                />
                <Text style={tw`my-auto`}>Remember me</Text>
            </View> */}


            <View style={{ paddingVertical: 10 }}>
                {
                    email == '' || password == '' || valEmail == true ?
                        <TouchableOpacity disabled onPress={signIn}>
                            <View style={tw`bg-gray-300 mx-5 rounded-full h-12`}>
                                <Text style={tw`text-white mx-auto my-auto`}>Sign up</Text>
                            </View>
                        </TouchableOpacity> :
                        <TouchableOpacity onPress={signIn}>
                            <View style={tw`bg-[#FF4D67] mx-5 rounded-full h-12`}>
                                <Text style={tw`text-white mx-auto my-auto`}>Sign up</Text>
                            </View>
                        </TouchableOpacity>
                }

            </View>

            <View style={tw`mx-auto my-3 flex-row`}>
                <View style={tw`h-[2px] my-auto w-25 mx-[1px] bg-gray-200 rounded-full `}></View>
                <Text style={tw`mx-1`}> or continue with </Text>
                <View style={tw`h-[2px] my-auto w-25 mx-[1px] bg-gray-200 rounded-full `}></View>
            </View>

            <View style={tw`flex-row justify-evenly mx-10 my-1`}>
                <TouchableOpacity onPress={() => { console.log('Continue with Facebook'); }}>
                    <View style={tw`bg-gray-200 px-5 py-3 rounded-lg border-gray-300 border`}>
                        <Image
                            style={tw`w-6 h-6`}
                            source={{
                                uri: 'https://img.icons8.com/fluency/90/null/facebook-new.png',
                            }}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { console.log('Continue with Google'); }}>
                    <View style={tw`bg-gray-200 px-5 py-3 rounded-lg border-gray-300 border`}>
                        <Image
                            style={tw`w-6 h-6`}
                            source={{
                                uri: 'https://img.icons8.com/color/90/null/google-logo.png',
                            }}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { console.log('Continue with Apple'); }}>
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




            {/* <View style={[tw`flex-row `,{position:'relative', left:0, right:0,top:'20%', bottom:10, justifyContent:'center'}]}>
                <Text style={[ tw`my-auto`]}>Already have an account? </Text>
                <TouchableOpacity>
                    <View>
                        <Text style={[tw`text-[#FF4D67] p-1`]} onPress={() => navigation.navigate('Login')}>Login</Text>
                    </View>
                </TouchableOpacity>
            </View> */}
        </>
    )
}

export default SignIn



const style = StyleSheet.create({
})

