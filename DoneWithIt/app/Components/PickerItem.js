import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'

export default function PickerItem({item,onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={[styles.text,{borderColor:item.backgroundIconColor}]}>{item.l}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        borderWidth: 1,
        borderRadius: 20,
        margin:10,
        padding: 10
    }
})