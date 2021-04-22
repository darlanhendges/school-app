import React, { useEffect } from "react";
import * as Updates from "expo-updates";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';
import { enableScreens } from 'react-native-screens';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import NameContextProvider from './contexts/name';
import Routes from './routes';

enableScreens();

export default function App() {
  let [fontsLoaded] = useFonts({ Pacifico_400Regular });

  useEffect(() => {
    try {
      async function updateApp() {
        const { isAvailable } = await Updates.checkForUpdateAsync();
        if (isAvailable) {
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
        }
      }
      updateApp();
    }
    catch (e) {
      Alerta('Não foi possível atualizar!');
    }
  }, []);

  return (
    <SafeAreaProvider style={styles.droidSafeArea}>
      <NavigationContainer>
        <NameContextProvider>
          <Routes />
        </NameContextProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
