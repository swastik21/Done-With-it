import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

import colors from '../config/colors'

const AppButton = ({title,onPress,color='primary'}) => {
    return (
        <TouchableOpacity style={[styles.button,{backgroundColor:colors[color]}]} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:{
        width:'100%',
        backgroundColor: colors.primary,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        padding:20,
        marginVertical:10,
    },
    title:{
        color:colors.white,
        fontSize:18,
        textTransform:'uppercase',
        fontWeight:'bold',
    }
})
export default AppButton
