import React, { useState, useEffect } from "react";
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
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import ThreeLineIcon from "../../../src/assets/Svgimages/arrowright.svg";
import SearchIcon from "../../../src/assets/Svgimages/search.svg";
import { styles } from "../../Theme";
import TrendingMovies from "../../Components/TrendingMovies";
import MoviesList from "../../Components/MoviesList";
import { useNavigation } from "@react-navigation/native";
import Loadingscreen from "../../Components/Loading";
import {
  fetchTrendingMovies,
  fetchuTopMovies,
  fetchupcomingMovies,
} from "../../../api/moviedb";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigationPropType } from "../../Navigation/AppNavigation";
type NavigationProps=NativeStackNavigationProp<StackNavigationPropType>
const ios = Platform.OS == "ios";

export default function HomeScreen() {
  const [trending, SetTrending] = useState([]);
  const [upComing, SetUpComing] = useState([]);
  const [loading, SetLoading] = useState(true);

  const [topRatedMovies, SetTopRatedMovies] = useState([]);
  const Navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  useEffect(() => {
    getUpcomingMovies();
  }, []);

  useEffect(() => {
    getTopRated();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    // console.log('gottttttttttttttttt',data)
    if (data && data.Search) SetTrending(data.Search);
    SetLoading(false);
  };

  const getUpcomingMovies = async () => {
    const data = await fetchupcomingMovies();
    // console.log('upppppppppp',data)
    if (data && data.Search) SetUpComing(data.Search);
    SetLoading(false);
  };

  const getTopRated = async () => {
    const data = await fetchuTopMovies();
    // console.log('toppppppppppppppppppp',data)
    if (data && data.Search) SetTopRatedMovies(data.Search);
    SetLoading(false);
  };
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className={ios ? "mb-2" : "mb-6"}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-5 mt-2 ">
          <Bars3CenterLeftIcon color="white" strokeWidth={2} />
          <Text className="text-white text-2xl font-bold">
            <Text style={styles.text}>M</Text>ovies
          </Text>
          <Pressable onPress={() => Navigation.navigate("search")}>
            <MagnifyingGlassIcon color="white" strokeWidth={2} />
          </Pressable>
        </View>
      </SafeAreaView>

      {loading ? (
        <Loadingscreen />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          <TrendingMovies data={trending} />
          <MoviesList title="Upcoming" data={upComing} />
          <MoviesList title="Top Rated" data={topRatedMovies} />
        </ScrollView>
      )}
    </View>
  );
}
