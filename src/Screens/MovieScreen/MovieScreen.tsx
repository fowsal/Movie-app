import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
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
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon, FaceFrownIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { styles, theme } from "../../Theme";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../../Components/Cast";
import MoviesList from "../../Components/MoviesList";
import LoadingScreen from "../../Components/Loading";
import { fetchmovieDetails, fetchmovieCredit } from "../../../api/moviedb";
import axios from "axios";
import { err } from "react-native-svg/lib/typescript/xml";
import { fetchupcomingMovies } from "../../../api/moviedb";

type ItemType = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  Genre:string;
  Plot:string;
};
// export type CastType={
//   Actors: string;
//   Awards: string;
//   BoxOffice: string;
//   Country: string;
//   DVD: string;
//   Director: string;
//   Genre: string;
//   Language: string;
//   Metascore: string;
//   Plot: string;
//   Poster: string;
//   Production: string;
//   Rated: string;
//   Ratings: Array<any>;
//   Released: string;
//   Response: string;
//   Runtime: string;
//   Title: string;
//   Type: string;
//   Website: string;
//   Writer: string;
//   Year: string;
//   imdbID: string;
//   imdbRating: string;
//   imdbVotes: string;
// }
export default function MovieScreen() {
  const { width, height } = Dimensions.get("window");
  const { params: item } = useRoute();

  const [movie, SetMovie] = useState<ItemType|null>(null);
  const navigation = useNavigation();
  const ios = Platform.OS === "ios";
  const topMargin = ios ? "" : "mt-3";
  const [favorite, Setfavorite] = useState(false);
  const [cast, SetCast] = useState([1,2,3,4,5,6,7]);
  const [similarmovies, SetsimilarMovies] = useState([]);
  const [loading, SetLoading] = useState(false);

  const getMovieDetails = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${item?.imdbID}&apikey=f8ddcb66`
      );
     
      if (response) SetMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getMovieDetails();
  }, []);






const getsimilarmovieDetails= async()=>{
  const data= await fetchupcomingMovies();
  console.log('upppppppppp',data)
  if(data&&data.Search)SetsimilarMovies(data.Search);
  SetLoading(false)
  
};

useEffect(()=>{
  getsimilarmovieDetails();
},[]);
  return (

    <>
      {movie ? (
          <ScrollView
          contentContainerStyle={{ paddingBottom: 20 }}
          className="flex-1 bg-neutral-900"
        >
          <View className="w-full">
            <SafeAreaView
              className={
                "w-full flex-row justify-between items-center px-4  " +
                topMargin
              }
            >
              <TouchableOpacity
                style={styles.background}
                className="rounded-xl p-1"
                onPress={() => navigation.goBack()}
              >
                <ChevronLeftIcon size="28" strokeWidth={2.5} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Setfavorite(!favorite)}>
                <HeartIcon
                  size="35"
                  color={favorite ? theme.background : "gray"}
                />
              </TouchableOpacity>
            </SafeAreaView>
          </View>
          <View>
            <Image
              source={movie?.Poster !== "N/A" ? { uri: movie?.Poster } : require("../../assets/images/moviePoster2.png")}
              style={{
                height: height * 0.45,
                width,
              }}
            />
        
          </View>
          <View
            className="space-y-3 justify-center"
            style={{ marginTop: -(height * 0.09) }}
          >
            <Text className="text-pink-700 text-center text-3xl font-bold tracking-wider justify-center">
              
              {movie.Title}
            </Text>
            
            {
              movie?.imdbID?(

            <Text className="text-neutral-400 font-semibold text-base text-center">
              {" "}
              Released{movie.Year?.split('-')[0]}
            </Text>
              ):null
            }
          </View>
          {/* generes */}
          <View className="flex-row justify-center  space-x-2 mt-3 mx-4">
            {
              movie?.Genre?.split(',').map((genres:string,index:any)=>{
                let showdot=index+1==movie.Genre.length;
                return(
  <Text key={index} className="text-neutral-400 font-semibold  text-center">{movie.Genre}{showdot?".":null}</Text>
                )
              })
            }
          
          </View>
          
          <Text className="text-neutral-600 mt-4 mx-4 tracking-wide">
            {movie.Plot}
           
          </Text>
          {cast && <Cast cast={cast} />}
          <MoviesList  hideSeeAll={true} data={similarmovies} />
        </ScrollView>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
}
