import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions, Pressable } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { scale } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ReadMore from '@fawazahmed/react-native-read-more';





export default Post = ({ data }) => {

    const [liked, setLiked] = useState(false);
    const [isBookmark, setIsBookmark] = useState(false);

    return (
        <View style={tw`pb-2 border-b-[1px] border-gray-300`}>
            <View style={[styles.postHead, tw`flex-row justify-between mx-3`]}>
                <View style={tw`my-auto flex-row`}>
                    <Image
                        //  style={tw`w-5 h-5 mx-2 my-auto`}
                        style={[styles.DP, tw`my-auto rounded-full bg-white dark:bg-black mr-2 border border-[#FF4D67]`]}
                        source={{
                            uri: data.avatar,
                        }}
                    />
                    <Text style={[styles.UsernameStyle, tw`my-auto`]}>
                        {data.username}
                    </Text>
                </View>
                <View style={tw`my-auto`}>
                    <TouchableOpacity onPress={()=>{console.log('Post menu button clicked')}}>
                        <Image
                            //  style={tw`w-5 h-5 mx-2 my-auto`}
                            style={[styles.menuButton, tw`my-auto rounded-full mr-2`]}
                            source={{
                                uri: 'https://img.icons8.com/ios-filled/500/FF4D67/menu-2.pnghttps://img.icons8.com/ios-filled/500/FF4D67/menu-2.png',
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={tw`relative`}>
                <Image
                    //  style={tw`w-5 h-5 mx-2 my-auto`}
                    style={[styles.postContent, tw`bg-gray-300`]}
                    source={{
                        uri: data.photo,

                    }}
                />
            </View>

            <View style={[tw`mx-2 my-2 justify-between flex-row`]}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
                            <Ionicons
                                style={tw`mx-1`}
                                name={liked ? "heart" : "heart-outline"}
                                size={30}
                                color={liked ? "#FF4D67" : "gray"}
                            />
                        </Pressable>
                        <Text style={tw`mx-auto -mt-1 font-bold`}>{data.totalLikes}</Text>
                    </View>

                    <View>
                        <Pressable
                        onPress={() => console.log('Comment button clicked')}
                        >
                            <MaterialCommunityIcons
                                style={[tw`mx-1`]}
                                name='message-reply-text-outline'
                                size={30}
                                color='gray'
                            />
                        </Pressable>
                        <Text style={tw`mx-auto -mt-1 font-bold`}>{data.totalComments}</Text>
                    </View>

                    <View>
                        <Pressable
                        onPress={() => console.log('Share button clicked')}
                        >
                            <MaterialCommunityIcons
                                style={tw`mx-1 -mt-1`}
                                name="share"
                                size={33}
                                color="gray"
                            />
                        </Pressable>
                        <Text style={tw`mx-auto -mt-1 font-bold`}>{data.totalShare}</Text>
                    </View>
                </View>

                <View>
                    <Pressable onPress={() => setIsBookmark((isBookmark) => !isBookmark)}>
                        <Ionicons
                            style={tw`mx-1`}
                            name={isBookmark ? "bookmark" : "bookmark-outline"}
                            size={28}
                            color={isBookmark ? "#FF4D67" : "gray"}
                        />
                    </Pressable>
                </View>
            </View>

            <View style={tw`text-lg mx-3 leading-tight`}>
                <ReadMore numberOfLines={3} seeMoreText='more' style={styles.captionStyle} seeLessText='less'>
                    {data.caption}
                </ReadMore>
                <Text>{data.date}</Text>
            </View>

        </View>
    )
}



const styles = StyleSheet.create({
    postHead: {
        height: scale(50)
    },
    DP: {
        height: scale(30),
        width: scale(30)
    },
    UsernameStyle: {
        // fontWeight: 100
    },
    menuButton:
    {
        height: scale(23),
        width: scale(23)
    },
    postContent: {
        height: scale(450),
        width: null,
        flex: 1,
        resizeMode: 'contain',
    },


})