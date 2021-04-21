import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import * as Updates from "expo-updates";
import { enableScreens } from "react-native-screens";
import Routes from "./routes";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

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

  return (
    <SafeAreaProvider style={styles.droidSafeArea}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
