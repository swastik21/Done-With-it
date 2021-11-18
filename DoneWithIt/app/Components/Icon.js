import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {View} from 'react-native'

export default function Icon({
    name,
    size=50,
    backgroundColor='#000',
    iconColor='#fff'

}) {
    return (
        <View style={{
            width:size,
            height:size,
            borderRadius:size/2,
            backgroundColor,
            justifyContent:'center',
            alignItems:'center',
        }}>
            <MaterialCommunityIcons name={name} color={iconColor} size={size/2} />
        </View>
    )
}
