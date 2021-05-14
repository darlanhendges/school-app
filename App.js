import React, { useEffect } from 'react';
import * as Updates from 'expo-updates';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { getBottomSpace } from 'react-native-iphone-x-helper';


import AppLoading from 'expo-app-loading';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font';
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
    } catch (e) {
      Alerta('Não foi possível atualizar!');
    }
  }, []);

  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
    Roboto_400Regular,
    Roboto_500Medium,
    Helvetica: require('./assets/fonts/Helvetica.ttf'),
    Helvetica_Bold: require('./assets/fonts/Helvetica-Bold.ttf'),
  });
  
  if (!fontsLoaded)
    return <AppLoading />;

  return (
    <SafeAreaProvider style={{ flex: 1, paddingBottom: getBottomSpace() }}>
      <NavigationContainer>
        <Provider>
          <Routes />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
