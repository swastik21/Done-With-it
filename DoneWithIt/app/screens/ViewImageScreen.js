import React from 'react';
import { Image, StyleSheet, View, Platform, StatusBar } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/colors.js'
function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
        <View style={styles.closeButton}>
            <MaterialCommunityIcons name="close" color="white" size={30}/>
        </View>
        <View style={styles.delButton}>
            <MaterialCommunityIcons name="trash-can" color='white' size={35}/>
        </View>
        <Image
        resizeMode='contain' 
        style={styles.image}
        source={require('../assets/chair.jpg')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    delButton:{
        position:'absolute',
        top:40,
        right:20,
    },
    container: {
        backgroundColor:colors.black,
    },
    closeButton:{
        position:'absolute',
        top:40,
        left:20,
    },
    image:{
        width:'100%',
        height:'100%',
    }
})

export default ViewImageScreen;