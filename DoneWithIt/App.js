import React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import Screen from './app/Components/Screen';
import AppButton from './app/Components/AppButton';
import AccountScreen from './app/screens/AccountScreen';
import AuthNavigator from './app/Navigation/AuthNavigator'
import ListingEditScreen from './app/screens/ListingEditScreen';
import NavigationTheme from './app/Navigation/NavigationTheme';
import AppNavigator from './app/Navigation/AppNavigator';

const Tweets = ({navigation}) => (
  <Screen>
    <AppButton title='View Tweet' onPress={()=>navigation.navigate('TweetsDetails',{message:'Good morning'})}/>
  </Screen>
)

const TweetsDetails = ({route}) => (
  <Screen>
    <Text>Tweets Details: {route.params.message}</Text>
  </Screen>
)

const AccountNavigator = () => (
  
  <AccountScreen/>
  
)

const Stack = createNativeStackNavigator()
const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{
    headerStyle: { backgroundColor: "tomato" },
    headerTintColor: "white",
  }}>
    <Stack.Screen name='Tweets' component={Tweets} options={{
      headerShown:false
    }}/>
    <Stack.Screen name='TweetsDetails' component={TweetsDetails}/>
  </Stack.Navigator>
)

const Tab = createBottomTabNavigator()
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route})=>({
      tabBarIcon: ({ size, color }) => {
        let iconName;
        if (route.name === 'Feed') iconName = 'home'
        else if (route.name === 'Account') iconName='account'
        return <MaterialCommunityIcons name = { iconName } size = { size } color = { color }/>
      },
      tabBarActiveBackgroundColor: 'tomato',
      tabBarActiveTintColor: 'white',
      tabBarInactiveBackgroundColor: '#eee',
      tabBarInactiveTintColor: 'black'
  })}>
    <Tab.Screen name='Feed' component={FeedNavigator} options={{
      headerShown:false
    }}/>
    <Tab.Screen name='Account' component={AccountNavigator} options={{
      headerShown:false
    }}/>
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator/>
    </NavigationContainer>
  )
}
