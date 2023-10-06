import React from 'react'
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
  import { SafeAreaView } from "react-native-safe-area-context";

  const ios=Platform.OS == 'ios';  //platform object

function Personscreen() {
  return (
    <View className='flex-1 bg-neutral-800'>
        <SafeAreaView className={ios?"mb-2":"mb-3"}>


        <Text className='text-white'>Personscreen</Text>
        </SafeAreaView>

    </View>
  )
}

export default Personscreen