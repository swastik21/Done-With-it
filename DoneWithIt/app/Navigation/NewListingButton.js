//CREATED BY SWASTIK POOJARI

import React from 'react'
import { View, StyleSheet } from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons"

import colors from '../config/colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function NewListingButton({onPress}) {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPress}>
                <MaterialCommunityIcons name='plus-circle' size={40} color={colors.white}/>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        backgroundColor: colors.primary,
        width: 80,
        height: 80,
        borderRadius: 40,
        bottom: 22,
        borderColor: colors.white,
        borderWidth: 10,
        justifyContent:'center'
    }
})
