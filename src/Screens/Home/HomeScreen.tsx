import React, { useState } from 'react'
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
  } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { StatusBar } from 'expo-status-bar';
  import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline';
  import ThreeLineIcon from "../../../src/assets/Svgimages/arrowright.svg"
  import SearchIcon from "../../../src/assets/Svgimages/search.svg"
  import {styles} from '../../Theme'
  import TrendingMovies from '../../Components/TrendingMovies';
  import MoviesList from '../../Components/MoviesList';


  const ios=Platform.OS == 'ios';

export default function HomeScreen() {
 const  [trending,SetTrending]=useState([1,2,3,4,5,6,7,8])
 const [upComing,SetUpComing]=useState([1,2,3,4,5,6,7,8])
 const [topRatedMovies,SetTopRatedMovies]=useState([1,2,3,4,5,6,7,8])
  return (
  
   <View className='flex-1 bg-neutral-800'>
    <SafeAreaView className={ios?"mb-2":"mb-3"}>
      <StatusBar style="light"/>
      <View className='flex-row justify-between items-center mx-4'>
        <Bars3CenterLeftIcon color='white' strokeWidth={2}/>
        <Text className="text-white text-2xl font-bold">
          <Text style={styles.text}>M</Text>ovies</Text>
        <MagnifyingGlassIcon color='white' strokeWidth={2}/>
      
      </View>
    

    </SafeAreaView>
    <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{paddingBottom:10}}
    >
      <TrendingMovies data={trending} />
      <MoviesList title="Upcoming" data={upComing}/>
      <MoviesList title="Top Rated" data={topRatedMovies}/>
    </ScrollView>
    

   </View>
    
  )
}
 