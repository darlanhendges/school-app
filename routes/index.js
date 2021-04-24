import React, { useEffect } from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import FirstAccess from '../screens/FirstAccess';
import Login from '../screens/Login';
import SelectStep from '../screens/SelectStep';
import Welcome from '../screens/Welcome';
import { useNavigation } from '@react-navigation/native';

export default function Routes() {
    const NativeStack = createNativeStackNavigator();

    return (
        <NativeStack.Navigator initialRouteName="SelectStep">
            <NativeStack.Screen
                name="Login"
                component={Login}
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

            <NativeStack.Screen name="SelectStep"
                component={SelectStep}
                options={{
                    headerShown: false,
                    gestureEnabled: false
                }}
            />


        </NativeStack.Navigator>
    );
}