import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'


const Catagories = [
    {
        title: 'Entertainment'
    },
    {
        title: 'Gaming'
    },
    {
        title: 'Art'
    },
    {
        title: 'Animals'
    },
    {
        title: 'Comedy'
    },
    {
        title: 'Dance'
    },
    {
        title: 'Beauty'
    },
    {
        title: 'Music'
    }, 
    {
        title: 'Food & Drink'
    }, 
    {
        title: 'Sports'
    },
    {
        title: 'DIY'
    }, 
    {
        title: 'Travel'
    }, 
    {
        title: 'Science & Education'
    }, 
    {
        title: 'Family'
    }, 
    {
        title: 'Enime & Movie'
    }, 
    {
        title: 'Technology'
    }, 
    {
        title: 'Outdoors'
    }, 
    {
        title: 'Culture'
    }, 
    {
        title: 'Health'
    }, 
    {
        title: 'Comics'
    }, 
   
]

const InterestMenu = () => {

    const [selected, setSelected] = useState(false)

    
    return (
        <>
            <View style={tw`mx-2 mt-1 flex-row flex-wrap`}>
                {Catagories.map((Item, index) => {
                    return (

                        <TouchableOpacity key={index} onPress={() => {console.log(`Selected ${Item.title}`);}}>
                            <View style={tw`border-[#FF4D67] my-2 border-2 mx-1 px-2 rounded-full`}>
                                <Text style={tw`text-[#FF4D67] mx-auto p-2 my-auto font-semibold`}>{Item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </>
    )
}

export default InterestMenu



























// import { View, Text, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'
// import tw from 'twrnc'


// const Catagories = [
//     {
//         title: 'Entertainment'
//     },
//     {
//         title: 'Gaming'
//     },
//     {
//         title: 'Art'
//     },
//     {
//         title: 'Animals'
//     },
//     {
//         title: 'Comedy'
//     },
//     {
//         title: 'Dance'
//     },
//     {
//         title: 'Beauty'
//     },
//     {
//         title: 'Music'
//     }, 
//     {
//         title: 'Food & Drink'
//     }, 
//     {
//         title: 'Sports'
//     },
//     {
//         title: 'DIY'
//     }, 
//     {
//         title: 'Travel'
//     }, 
//     {
//         title: 'Science & Education'
//     }, 
//     {
//         title: 'Family'
//     }, 
//     {
//         title: 'Enime & Movie'
//     }, 
//     {
//         title: 'Technology'
//     }, 
//     {
//         title: 'Outdoors'
//     }, 
//     {
//         title: 'Culture'
//     }, 
//     {
//         title: 'Health'
//     }, 
//     {
//         title: 'Comics'
//     }, 
   
// ]

// const InterestMenu = () => {

//     const [selected, setSelected] = useState(false)

//     function isSelect(){
//         // console.log(`Selected`);
//         setSelected(!selected)
//         if (selected) {
//             console.log("select")
//         }else{
//             console.log("unselect")

//         }
//     }
//     return (
//         <>
//             <View style={tw`mx-2 mt-1 flex-row flex-wrap`}>
//                 {Catagories.map((Item, index) => {
//                     return (
                        
//                         <TouchableOpacity key={index} 
//                         onPress={isSelect}
//                         >

//                             <View style={tw`${selected?`bg-[#FF4D67] border-[#FF4D67]`:`border-[#FF4D67]`} my-2 border-2 mx-1 px-2 rounded-full`}>
//                                 <Text style={tw`${selected?`text-white`:`text-[#FF4D67]`} mx-auto p-2 my-auto font-semibold`}>{Item.title}</Text>
//                             </View>
//                         </TouchableOpacity>
//                     )
//                 })}
//             </View>
//         </>
//     )
// }

// export default InterestMenu