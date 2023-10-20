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
    TouchableOpacity,
    ActivityIndicator

    
  } from "react-native";

  import { useNavigation } from "@react-navigation/native";
  import { SafeAreaView }  from "react-native-safe-area-context";
  import { theme } from '../Theme';


export default function Loading() {

    const{width,height}=Dimensions.get('window')
  return (
    <View style={{height,width}} className='absolute flex-row justify-center items-center bg-neutral-800'>
        <ActivityIndicator size={160}color={theme.background} />

    </View>
  )
}
