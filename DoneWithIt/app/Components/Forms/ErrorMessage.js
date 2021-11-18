import React from 'react'
import { StyleSheet } from 'react-native'
import colors from '../../config/colors';

import AppText from '../AppText'

export default function ErrorMessage({error,visible}) {
    if (!visible || !error) return null;
    return (
        <AppText style={styles.error}>{error}</AppText>
    )
}

const styles = StyleSheet.create({
    error:{
        color: colors.primary,
        backgroundColor:'rgba(255,0,0,0.2)',
        borderWidth: 1,
        borderColor:colors.primary,
        borderRadius:50,
        paddingHorizontal:10,
        
    }
})