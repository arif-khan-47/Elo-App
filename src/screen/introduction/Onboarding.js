import { View, Text, StyleSheet, FlatList, Animated } from 'react-native'
import { React, useState, useRef } from 'react'
import { scale,} from 'react-native-size-matters';



import OnboardingData from '../../data/OnboardingData';
import OnboardingItems from '../../components/Onboarding/OnboardingItems';
import Pagination from '../../components/Onboarding/Pagination';
import NextButton from '../../components/Onboarding/NextButton';



export default Onboarding = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index)
  }).current;


  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const onboardingDataRef = useRef(null);


  const scrollTo =()=>{
    if(currentIndex < OnboardingData.length -1){
      onboardingDataRef.current.scrollToIndex({index: currentIndex+1})
    }else{
      navigation.navigate('LoginHero');
    // return null;
    console.log('Last Slide')
    }
  }

  return (
    <View style={style.container}>
      <View style={{ flex: 0.7 }}>
        <FlatList
          data={OnboardingData}
          renderItem={({ item }) => <OnboardingItems item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig} 
          ref={onboardingDataRef}
        />

      </View>
      <View style={{flex:0.1,alignItems: 'center'}}>
      <Pagination data={OnboardingData} scrollX={scrollX}/>
      </View>
      <View style={{flex:0.1}}>
      <NextButton scrollTo={scrollTo}/>
      </View>

    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
    justifyContent: "center",

  }
})





    // https://www.youtube.com/watch?v=r2NJJye0XnM&ab_channel=DesignIntoCode