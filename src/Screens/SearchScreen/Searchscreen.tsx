import React, { useState, useEffect, useCallback, useRef } from "react";
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
  TextInput,
} from "react-native";
//   import { styles } from '../Theme';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { XMarkIcon } from "react-native-heroicons/outline";
import LoadingScreen from "../../Components/Loading";
import axios from "axios";
import { debounce } from "lodash";

type SearchType = {
  Response: string;
  Search: Array<{
    Poster: string;
    Title: string;
    Type: string;
    imdbID: string;
    Year: string;
  }>;
};

export default function Searchscreen() {
  const Navigation = useNavigation();
  const [result, SetResult] = useState<SearchType["Search"]>();
  const { width, height } = Dimensions.get("window");
  const [loading, SetLoading] = useState(false);
  const searchValue= useRef<string>("");

  let MovieName = "fffffffffffffffffdsfdsa dsdsfsda dsfdsfdse  fdewfdsfewf ";
  // useEffect(() => {
  //     // Make the API request whenever searchValue changes
  // }, [searchValue]);

  // if (searchValue) {
  //   getSearchDetails();
  // }

  // const getSearchDetails=async()=>{
  //     try{
  //         const response= await axios.get(`https://www.omdbapi.com/?s=hulk&apikey=f8ddcb66`);
  //          console.log("==========", response.data);
  //         if(response)
  //         SetResult(response.data);

  //     }catch(error){
  //         console.log(error)
  //     }
  // }

  // useEffect(() => {
  //     getSearchDetails();
  //   }, []);
  const getSearchDetails = async () => {
    try {
        const endPoint=`https://www.omdbapi.com/?s=${searchValue.current}&apikey=f8ddcb66`
        console.log(endPoint)
      const response = await axios.get<SearchType>(endPoint);
      console.log("search input value", response.data);
      if (response.status === 200) {
        SetResult(response.data.Search);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearch = (value: any) => {
    searchValue.current=value;
    getSearchDetails();
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);
  console.log("RESULT", result);
  return (
    <>
      <SafeAreaView className="bg-neutral-800 flex-1">
        <View className="border border-neutral-500 rounded-full flex-row mx-4 mb-3 justify-between items-center">
          <TextInput
            onChangeText={(text) => {
              searchValue.current=text
              handleTextDebounce(text);
            }}
            placeholder="Search Movie"
            placeholderTextColor={"lightgray"}
            className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
          />
          <TouchableOpacity
            onPress={() => Navigation.navigate("Home")}
            className="rounded-full bg-neutral-500 p-3 m-1"
          >
            <XMarkIcon size="25" color="white" />
          </TouchableOpacity>
        </View>
        {/* ----------------------results------------------------ */}

        {result!==undefined ? <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          className="space-y-3"
        >
          <Text className="text-white ml-1 font-semibold">
            Results({result.length})
          </Text>

          <View className="flex-row justify-between flex-wrap ">
            {loading ? (
              <LoadingScreen />
            ) : (
              result.map((item, index) => {
                return (
                  <TouchableWithoutFeedback
                    key={index}
                    onPress={() => Navigation.navigate("Movie")}
                  >
                    <View className="space-y-2  mb-4">
                      <Image
                        className="rounded-3xl"
                        source={{ uri: item.Poster }}
                        style={{ width: width * 0.44, height: height * 0.3 }}
                      />
                      {/* <Text className='text-neutral-400 ml-2'>dz
                        {item.Title.length>22?item.Title.slice(0,22)+'...':item.Title}
                    </Text> */}
                    </View>
                  </TouchableWithoutFeedback>
                );
              })
            )}

            {result.length === 0 && !loading && (
              <View>
                <Text className="text-white ml-1 font-semibold">
                  No movies found
                </Text>
              </View>
            )}
          </View>
        </ScrollView> : <Text className="text-white mt-4"> search something...</Text>}
      </SafeAreaView>
    </>
  );
}
