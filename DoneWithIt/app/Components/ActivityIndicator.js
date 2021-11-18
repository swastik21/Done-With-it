//CREATED BY SWASTIK POOJARI

import React from 'react'
import LottieView from 'lottie-react-native'
import { Dimensions, View } from 'react-native';

export default function ActivityIndicator({ visible }) {
    const height = Dimensions.get('window').height
    if (!visible) return null;
    return (
        <View style={{ height: height * 0.95}}>
            <LottieView  source={require('../assets/animation/loader.json')} autoPlay loop />
        </View>
)}

