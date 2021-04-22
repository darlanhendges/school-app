import React, { useEffect } from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import FirstAccess from '../screens/FirstAccess';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import NameContextProvider from '../contexts/name';

export default function Routes() {
    const NativeStack = createNativeStackNavigator();

    return (
        <NativeStack.Navigator initialRouteName="FirstAccess">
            <NativeStack.Screen
                name="Login"
                component={(
                    <NameContextProvider>
                        <Login />
                    </NameContextProvider>
                )}
                options={{
                    headerShown: false,
                    gestureEnabled: false
                }}
            />
            
            <NativeStack.Screen
                name="FirstAccess"
                component={FirstAccess}
                options={{
                    headerShown: false,
                    gestureEnabled: false
                }}
            />

            <NativeStack.Screen name="Welcome"
                component={Welcome}
                options={{
                    headerShown: false,
                    gestureEnabled: false
                }}
            />
        </NativeStack.Navigator>
    );
}