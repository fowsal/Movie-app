import React from "react";
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
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { CastType } from "../Screens/MovieScreen/MovieScreen";

// type CastPropsType = {
//   cast: CastType;
// };

export default function Cast({ cast }: any) {
  const navigation = useNavigation();
  let characterName = "john Wick";
  let personName = "Perter K";
  return (
    <>
      {/* <Text>Heloooo</Text> */}
      <View className="my-6 mx-4 ">
        <Text className="text-white mb-3">Top Cast</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
        >
          {cast &&
            cast.map((person: any, index: any) => { 
               return (
                <TouchableOpacity
                  key={index}
                  className="mr-4 items-center"
                  onPress={() => navigation.navigate("Person")}
                >
                  <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500 ">
                    <Image
                      // source={
                      //   cast.Poster !== "N/A"
                      //     ? { uri: cast?.Poster }
                      //     : require("../assets/images/moviePoster2.png")
                      // }
                      source={require('../assets/images/moviePoster2.png')}
                      className="rounded-2xl h-24 w-26"
                    />
                  </View>
                  <Text className="text-gray-400 text-xs mt-1">
                    {characterName.length > 10
                      ? characterName.slice(0, 10) + "..."
                      : characterName}
                  </Text>
                  <Text className="text-gray-400 text-xs mt-1">
                    {personName.length > 10
                      ? personName.slice(0, 10) + "..."
                      : personName}
                  </Text>
                </TouchableOpacity>
               );}
             )} 
        </ScrollView>
      </View>
    </>
  );
}
