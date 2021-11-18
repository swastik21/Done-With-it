import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import defaultStyles from '../config/styles'

export default function AppTextInput({icon, items,width='100%',...otherprops}) {
    return (
        <View style={[styles.container,{width}]}>
            {icon && <MaterialCommunityIcons name={icon} size={25} color={colors.medium} style={styles.icon} />}
            <TextInput placeholderTextColor={colors.medium} style={[defaultStyles.text,styles.textInput]} {...otherprops} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.light,
        borderRadius:25,
        flexDirection:'row',
        width:'100%',
        padding:15,
        marginVertical:10
    },
    icon:{
        marginRight:10
    },
    textInput:{
        width:'100%'
    }
})
