import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  Modal,
  StyleSheet,
  Animated,
  Platform,
  ScrollView, 
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { animatedStyles, scrollInterpolator } from "../utils/animation";
import { useNavigation } from "@react-navigation/native";

export default function TrendingMovies({ data }: { data: Array<any> }) {
  const { width, height } = Dimensions.get("window");
  const navigation=useNavigation()
 
  // const renderItem = ({ item }: any) => {
  //   return (
  //     <View>
  //       <Image 
  //       source={require('../assets/images/moviePoster2.png')}
        
  //       />

  //       {/* <Text className="text-white">sjfnjndj</Text> */}
  //     </View>
  //   );
  // };
  return (
    <View className="mb-6 ">
      <Text className="text-white">Trending</Text>
    
    
      <Carousel
        data={data}
        renderItem={({item})=><MovieCard item={item} />}
        firstItem={1}
        inactiveSlideOpacity={0.60}
      
        slideStyle={{display:'flex',alignItems:'center'}}
        itemWidth={width*0.62}   
     
        sliderWidth={width} // Set sliderWidth to the width of the screen
      
       
      />
    </View>
  );
}


const MovieCard=({item,handleClick}:any)=>{
  const navigation=useNavigation<any>()
  
  const { width, height } = Dimensions.get("window"); 
  return(
    <Pressable onPress={()=>navigation.navigate("Movie",item)}>
      <Image 
      
      source={{uri:item.Poster !== "N/A" ? item.Poster  : "../assets/images/moviePoster2.png"}}

      // source={require('../assets/images/moviePoster2.png')}
      style={{
        width: width*0.6,
        height: height*0.4
      }}
      className="rounded-3xl "
      />

    </Pressable>
  )
}