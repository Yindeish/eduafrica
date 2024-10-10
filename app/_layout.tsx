import { Slot, Stack } from 'expo-router';
import { SessionProvider } from '../contexts/userSignedInContext';
import { SessionProvider as TokenSessionProvider } from '../contexts/userTokenContext';
import { PaperProvider } from 'react-native-paper';
import { fonts } from '../constants/fonts';
import React from 'react';
import { Provider } from 'react-redux'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import { BottomSheetProvider } from '../contexts/useBottomSheetContext';
// import { useFonts, Montserrat_100Thin, Montserrat_300Light, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold, Montserrat_800ExtraBold } from '@expo-google-fonts/montserrat'

export default function Root() {

  // let [fontsLoaded] = useFonts({
  //   Montserrat_100Thin,
  //   Montserrat_300Light,
  //   Montserrat_400Regular,
  //   Montserrat_500Medium,
  //   Montserrat_700Bold,
  //   Montserrat_800ExtraBold
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }
  SplashScreen.hideAsync();

  return (
    <GestureHandlerRootView>
      <BottomSheetProvider>
        <PaperProvider>
          <TokenSessionProvider>
            <SessionProvider>
              <Slot />
            </SessionProvider>
          </TokenSessionProvider>
        </PaperProvider>
      </BottomSheetProvider>
    </GestureHandlerRootView>
  );
}
