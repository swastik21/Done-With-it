import React, { useEffect, useState } from 'react'
import { FlatList,StyleSheet, View } from 'react-native'
import { Dimensions } from 'react-native'

import ActivityIndicator from '../Components/ActivityIndicator'
import Screen from '../Components/Screen'
import Card from '../Components/Card'
import colors from '../config/colors'
import Routes from '../Navigation/Routes'
import listingsApi from '../api/listings'
import AppText from '../Components/AppText'
import AppButton from '../Components/AppButton'
import useApi from '../hooks/useApi'
export default function LisitngScreen({ navigation }) {
    const {data: listings,error,loading,request: loadListings} = useApi(listingsApi.getListings)

    useEffect(() => {
        loadListings()
    }, [])
    
    const height = Dimensions.get('window').height

    return (
        <Screen style={styles.screen}>
            {error &&
                <>
                    <AppText>Couldn't get the listings.</AppText>
                    <AppButton title='Retry' onPress={loadListings}/>
                </>
            }
            
            <ActivityIndicator   visible={loading}/>
            
            <FlatList
            style={{height: height*0.95}}
            showsVerticalScrollIndicator={false}
            data={listings}
            keyExtractor={listings => listings.id.toString()}
            renderItem={({item}) => 
            <Card
            title={item.title}
            subTitle={ "$" + item.price}
            imageUrl={item.images[0].url}
            onPress={()=>navigation.navigate(Routes.LISTING_DETAILS,item)}
            />
            }/>
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen:{
        padding: 20,
        backgroundColor:colors.light
    }
})