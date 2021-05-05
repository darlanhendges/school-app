import React, { useEffect } from 'react';
import * as Updates from 'expo-updates';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { enableScreens } from 'react-native-screens';
import AppLoading from 'expo-app-loading';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font';

import NameContextProvider from './contexts/name';
import Routes from './routes';

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
  if (!fontsLoaded) return <AppLoading />;

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <NavigationContainer>
        <NameContextProvider>
          <Routes />
        </NameContextProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
