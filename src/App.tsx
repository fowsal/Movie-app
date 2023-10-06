import { registerRootComponent } from "expo";
import {SafeAreaView, Text} from 'react-native';

import AppNavigation from "../../Movie-app/src/Navigation/AppNavigation";

export default function App() {
  return (
    <>
      {/* <SafeAreaView > */}
      <AppNavigation />
      {/* </SafeAreaView> */}
    </>
  );
}

registerRootComponent(App);
