import React, { useEffect } from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import FirstAccess from '../screens/FirstAccess';
import Login from '../screens/Login';
import SelectStep from '../screens/SelectStep';
import Welcome from '../screens/Welcome';
import Question from '../screens/Question';

export default function Routes() {
    const NativeStack = createNativeStackNavigator();

    return (
        <NativeStack.Navigator initialRouteName="FirstAccess">
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

            <NativeStack.Screen name="Question"
                component={Question}
                options={{
                    headerShown: false,
                    gestureEnabled: false
                }}
            />
        </NativeStack.Navigator>
    );
}