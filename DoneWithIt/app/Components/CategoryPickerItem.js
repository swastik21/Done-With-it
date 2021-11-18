import React from 'react'
import { View,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AppText from './AppText'
import Icon from './Icon'

export default function CategoryPickerItem({item,onPress}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
            <Icon name={item.IconName} backgroundColor={item.backgroundIconColor} size={80} />
            <AppText style={styles.label}>{item.l}</AppText>
        </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal:30,
        paddingVertical: 15,
        alignItems: 'center',
        width: '34%'
    },
    label: {
        marginTop:5,
        textAlign:'center'
    }
})
