import React from 'react'
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
const { createStackNavigator } = require("@react-navigation/stack");

const Stack = createStackNavigator()

export default AuthNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Register' component={RegisterScreen}/>
        </Stack.Navigator>
    )
}
