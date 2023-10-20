import React,{useState,useEffect} from 'react'
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
    TouchableOpacity,
    
    
  } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  import {ChevronLeftIcon} from 'react-native-heroicons/outline';
  import {HeartIcon} from 'react-native-heroicons/solid';
  import { useNavigation } from "@react-navigation/native";
  import {styles,theme} from '../../Theme'
  import MoviesList from '../../Components/MoviesList';
  import LoadingScreen from '../../Components/Loading';
  import { fetchupcomingMovies } from '../../../api/moviedb';
  const ios=Platform.OS == 'ios'; 
  const verticalMargin=ios?'':'my-3';

function Personscreen() {
  const navigation=useNavigation()
  const[favorite,Setfavorite]=useState(false)
  const { width, height } = Dimensions.get("window");
  const[personMovies,SetPersonMovies]=useState([])
  const [loading,SetLoading]=useState(false)

  useEffect(()=>{
    getsimilarpersonDetails();
  },[]);
  const getsimilarpersonDetails= async()=>{
    const data= await fetchupcomingMovies();
    // console.log('upppppppppp',data)
    if(data&&data.Search)SetPersonMovies(data.Search);
    SetLoading(false)
    
  };
  
  
  return (
    <>
  <ScrollView className='flex-1 bg-neutral-800'     contentContainerStyle={{paddingBottom:20}}>
  <SafeAreaView className={" z-20 w-full flex-row justify-between items-center px-4  "+ verticalMargin}>
        <TouchableOpacity style={styles.background} className='rounded-xl p-1' onPress={()=>navigation.goBack()}>
        <ChevronLeftIcon size='28' strokeWidth={2.5} color='gray'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Setfavorite(!favorite)}>
        <HeartIcon size="35"  color={favorite?theme.background:"gray"}/>
      </TouchableOpacity>
        </SafeAreaView>
        <View>
        <View className='flex-row justify-center '
      style={{
        shadowColor:'gray',
        shadowRadius: 40,
        shadowOffset:{width:0,height:5},
        shadowOpacity:1
      }}
      
      >

        {/* {
          data.map((item:any,index:any)=>{
            return(

            )
          })
        } */}
                <View className='rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-600 items-center'>

<Image source={require('../../assets/images/moviePoster2.png')}
style={{
  height:height*0.43, width:width*0.74
}}

/>
</View>

        </View>
        <View>
        <Text className='text-2xl font-bold text-white text-center'>Zyan Fowsal</Text>
        <Text className='text-base  text-neutral-300 text-center'>London ,UK</Text>
      </View>
      <View className='mx-3 p-4 mt-6 flex-row items-center bg-neutral-700 rounded-full'>
        <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
          <Text className='text-white font-semibold'>Gender</Text>
          <Text className='text-neutral-300 font-sm'>Male</Text>
        </View>
        <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
          <Text className='text-white font-semibold'>Birthday</Text>
          <Text className='text-neutral-300 font-sm'>19-03-2022</Text>
        </View>
        <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
          <Text className='text-white font-semibold'>Known for</Text>
          <Text className='text-neutral-300 font-sm'>Acting</Text>
        </View>
        <View className=' px-2 items-center'>
          <Text className='text-white font-semibold'>popularity</Text>
          <Text className='text-neutral-300 font-sm'>76.43</Text>
        </View>
      </View>
      <View className='mb-3'>
        <Text className='text-white mx-3 space-y-2 my-3'>Biography</Text>
        <Text className='text-neutral-400  tracking-wide'>William Ellsworth "Dummy" Hoy (May 23, 1862 – December 15, 1961) was an American center fielder in Major League Baseball (MLB) who played for several teams from 1888 to 1902, most notably the Cincinnati Reds and two Washington, D.C. franchises.

Hoy is the most accomplished deaf player in MLB history, and is credited by some sources with causing the establishment of signals for safe and out calls.[1][2][3] He held the MLB record for games in center field (1,726) from 1889 to 1902, set records for career putouts (3,958) and total chances (4,625) as an outfielder, and retired among the leaders in outfield games (2nd; 1,795), assists (7th; 273), and double plays (3rd; 72). </Text>
      </View>
        </View>
        <MoviesList title={'Movies'} hideSeeAll={true} data={personMovies}/>

  </ScrollView>


    </>
  )
}

export default Personscreen