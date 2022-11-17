import React from 'react'
import { View, SafeAreaView, FlatList } from 'react-native'
import tw from 'twrnc'
import Header from '../../components/Home/Header'
import Post from '../../components/Home/Post'

// Data 
import FeedData from '../../data/FeedData'



function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[{ flex: 0.1 }, tw``]}>
        <Header />
        <View style={tw`h-[1px] bg-gray-200`}></View>
      </View>
      {/* <ScrollView style={{ flex: 0.9 }}> */}
      <FlatList
        style={{ flex: 0.9 }}
        data={FeedData}
        renderItem={({ item }) => {
          return (
            <>
              <Post data={item} />
            </>
          )
        }
        }
        // horizontal
        showsHorizontalScrollIndicator={false}
        // pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        // onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
        //   useNativeDriver: false,
        // }
        // )}
        scrollEventThrottle={32}

      />
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}


export default HomeScreen
