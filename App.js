import React, { useEffect } from "react";
import * as Updates from "expo-updates";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from 'react-native-screens';
import AppLoading from 'expo-app-loading';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';



import Routes from './routes';
import Provider from "./contexts";

enableScreens();

export default function App() {

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

  let [fontsLoaded] = useFonts({ Pacifico_400Regular, Roboto_400Regular, Roboto_500Medium });
  if (!fontsLoaded)
    return <AppLoading />;

  return (
    <NavigationContainer>
      <Provider>
        <Routes />
      </Provider>
    </NavigationContainer>
  );
}
