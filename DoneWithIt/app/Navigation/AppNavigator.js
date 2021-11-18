import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons"

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';
import Routes from './Routes';

const Tab = createBottomTabNavigator()

export default AppNavigator = () => {
    return(
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel:false
    }}>
            <Tab.Screen name='Feed' component={FeedNavigator} options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='home' size={size} color={color}/>
                
            }}/>
            <Tab.Screen name='Listings' component={ListingEditScreen} options={({navigation})=>({
                tabBarButton: () => <NewListingButton onPress={()=>navigation.navigate(Routes.LISTINGS_EDIT)}/>,
                
            })}/>
        <Tab.Screen name='Account' component={AccountNavigator} options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='account' size={size} color={color}/>
                
            }}/>
    </Tab.Navigator>
    )
}