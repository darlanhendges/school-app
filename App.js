import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as  Updates from 'expo-updates';
import { enableScreens } from 'react-native-screens';
import Routes from './routes';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppLoading } from 'expo';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';

enableScreens();

export default function App() {
  let [fontsLoaded] = useFonts({ Pacifico_400Regular });

  useEffect(() => {
    async function updateApp() {
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }
    updateApp();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar style='light' />
      <NavigationContainer>
        {!fontsLoaded ? <AppLoading /> : <Routes />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}