import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import colors from '../config/colors'
import AppText from '../Components/AppText'
import ListItem from '../Components/Lists/ListItem'

export default function ListingDetailsScreen({ route }) {
    const listings = route.params
    return (
        <View>
            <Image resizeMode={'contain'} style={styles.image} source={{uri:listings.images[0].url}}/>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{listings.title}</AppText>
            <AppText style={styles.price}>${listings.price}</AppText>
            <View style={styles.userContainer}>
                <ListItem
                image={require('../assets/swastik.jpg')}
                title='Swastik Poojari'
                subTitle='5 Listings'
                />
            </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    image:{
        height:300,
        width:'100%'
    },
    detailsContainer:{
        padding:10,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
    },
    price:{
        color:colors.secondary,
        fontWeight:'bold',
        marginVertical:10,
        fontSize:20
    },
    userContainer:{
        marginVertical:40,
    }
})