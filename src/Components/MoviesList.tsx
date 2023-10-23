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
import { styles } from "../Theme";
import { useNavigation } from "@react-navigation/native";

export default function MoviesList({ data, title, hideSeeAll }: any) {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();
  let moviename = "Ant-Man and wsap Quantumania";
  return (
    <View className="">
      <View className="flex-row justify-between items-center">
        <Text className="text-white">{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity>
            <Text style={styles.text}>See All </Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item: any, index: any) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.navigate("Movie")}
            >
              <View className="space-y-1 mr-4 mb-4 mt-4">
                <Image
                  source={{uri:item.Poster !== "N/A"
                  ? item.Poster 
                  :"../assets/images/moviePoster2.png"}}
                  // source={
                  //   item.Poster !== "N/A"
                  //     ? { uri: item.Poster }
                  //     : require("../assets/images/moviePoster2.png")
                  // }
                  // source={{uri:item.Poster}}
                  className="rounded-3xl"
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                  }}
                />
                <Text className="text-neutral-300 ml-1">
                  {item.Title.length > 14
                    ? item.Title.slice(0, 14) + "..."
                    : item.Title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}
