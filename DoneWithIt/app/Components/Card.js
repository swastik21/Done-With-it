import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import colors from '../config/colors';
import AppText from './AppText';

export default function Card({title,subTitle,imageUrl,onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={{uri: imageUrl}}/>
                <View  style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subtitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius:15,
        backgroundColor: colors.white,
        marginBottom:20,
        overflow:'hidden',
    },
    detailsContainer:{
        padding:10,
    },
    image:{
        height:200,
        width:'100%',
    },
    subtitle:{
        color: colors.secondary,
        fontWeight:'bold',
    },
    title:{
        marginBottom:7,
    },
})