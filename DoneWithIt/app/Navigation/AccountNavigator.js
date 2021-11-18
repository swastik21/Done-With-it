import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import MessageScreen from '../screens/MessageScreen';

const Stack = createStackNavigator()

export default AccountNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='AccountScreen' component={AccountScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Messages' component={MessageScreen}/>
        </Stack.Navigator>
    )
}