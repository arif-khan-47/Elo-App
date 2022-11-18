import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FeedData from '../../data/FeedData'

const Posts = () => {

    return (
        <View>
            {
                FeedData.map((data, index) => {
                    const [like, setLike] = useState(data.isLiked)
                    return (
                        <View key={index} style={{ paddingBottom: 10, borderBottomColor: 'gray', borderBottomWidth: 0.1 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Image source={{
                                        uri: data.avatar
                                    }}
                                        style={{ width: 40, height: 40, borderRadius: 100 }}
                                    />
                                <View style={{paddingLeft:5}}>
                                    <Text style={{fontSize:15, fontWeight:'bold'}}>
                                        {data.username}
                                    </Text>
                                </View>
                                </View>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default Posts

const styles = StyleSheet.create({})