import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
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
    TouchableOpacity
    
  } from "react-native";
  import { useNavigation } from "@react-navigation/native";
  import { SafeAreaView }  from "react-native-safe-area-context";
  import {ChevronLeftIcon} from 'react-native-heroicons/outline';
  import {HeartIcon} from 'react-native-heroicons/solid';
  import {styles, theme} from '../../Theme'
  import { LinearGradient  } from 'expo-linear-gradient';
  import Cast from '../../Components/Cast';
  import MoviesList from '../../Components/MoviesList';

export default function MovieScreen( ) {
  const { width, height } = Dimensions.get("window");
  const{params:item}=useRoute();
  // useEffect{()=>{
  //   console.log()

  // },[item]}
  const navigation=useNavigation()
  const ios=Platform.OS ==='ios'
  const topMargin = ios?'':'mt-3';
  const[favorite,Setfavorite]=useState(false)
  const[cast,SetCast]=useState([1,2,3,4,5,6,7,8,9,10,6,4,5])
  const[similarmovies,SetsimilarMovies]=useState([2,3,4,5,])
  let MovieName="Ant-Man and wsap Quantumania"
  let Title="Similar Movies"
  return (
   
    

    <ScrollView
    contentContainerStyle={{paddingBottom:20}}
    className='flex-1 bg-neutral-900'>
      <View className='w-full'> 
        <SafeAreaView className={"w-full flex-row justify-between items-center px-4  "+ topMargin}>

      <TouchableOpacity style={styles.background} className='rounded-xl p-1' onPress={()=>navigation.goBack()}>

<ChevronLeftIcon size='28' strokeWidth={2.5} color='gray'/>

      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Setfavorite(!favorite)}>
        <HeartIcon size="35"  color={favorite?theme.background:"gray"}/>
      </TouchableOpacity>
        </SafeAreaView> 

      </View>
      <View>

      
      < Image  
      source={require('../../assets/images/moviePoster2.png')}
      style={{
        height:height*0.45,width
      }}
      
      />
      {/* <LinearGradient
      colors={['tranparent','rgba(23,23,23,0.8)','rgba(23,23,23,1)']}
      style={{width,height:height*0.40}}
      start={{x:0.5,y:0}}
      end={{x:0.5,y:1}}
      // className='absolute bottom-0'
      
      
      /> */}
      </View>
      <View className='space-y-3 justify-center' style={{marginTop: -(height*0.09)}}>
        <Text className='text-pink-700 text-center text-3xl font-bold tracking-wider justify-center'>{MovieName}</Text>
        {/* status,release,runtime */}
        <Text className='text-neutral-400 font-semibold text-base text-center'> Released 2024 * 170min</Text>
      </View>
      {/* generes */}
      <View className='flex-row justify-center  space-x-2 mt-3 mx-4'>
        <Text className='text-neutral-400 font-semibold  text-center'>Action . </Text>
        <Text className='text-neutral-400 font-semibold  text-center'>Thrill . </Text>
        <Text className='text-neutral-400 font-semibold  text-center'>Comedy . </Text>
      </View>
      {/* description */}
      <Text className='text-neutral-600 mt-4 mx-4 tracking-wide'> sadaf zfds dsfdsf dsfads fdsadsf fdsadsf dfasdsf fdsfsd fdsads dfsasfds fdsafds dfsafd dfs fdsadfs fdsafd fsdfds dsfsfd fsdfsd fdssdfsddf dsfdsf fsaddsf fdssdafdfd fdsfds fdsd fdsdsffd fsdsa dsfdsd fdsaadf fsadf fdsfsaa sfgfsg fsgsfd ds sfg esrf sdasa gref dsf fs fdaaaaaa fadddd afdsf eqre fd3waw affd fewe sadew fwefew few  </Text>
<Cast data={cast}/>
<MoviesList title={Title} hideSeeAll={true}  data={similarmovies} />


    </ScrollView>
  
    
  ) 
}
 