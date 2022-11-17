import { View, Text, Image } from 'react-native'
import { React, useState } from 'react'
import tw from 'twrnc'

const Introduction = ({ navigation }) => {

    const [timePassed, setTimePassed] = useState(false);
    setTimeout(function () {
        setTimePassed(true);
    }, 3000);

    if (!timePassed) {

        return (
            <View style={tw`m-auto`}>
                <Image
                    style={tw`w-40 h-40`}
                    source={{
                        uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1667628956/ELO/videocam-outline_1_rccrbo.png',
                    }}
                />
            </View>
        )
    }
    navigation.navigate('Onboardings');
    return null;
}

export default Introduction