import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import LisitngScreen from '../screens/LisitngScreen'
import ListingDetailsScreen from '../screens/ListingDetailsScreen'

const Stack = createStackNavigator()

export default FeedNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            presentation: 'modal',
            headerShown: false,
            gestureEnabled:true
        }}>
            <Stack.Screen name='Listings' component={LisitngScreen}/>
            <Stack.Screen name='ListingsDetails' component={ListingDetailsScreen}/>
        </Stack.Navigator>
    )
}