//CREATED BY SWASTIK POOJARI

import React, { useRef } from 'react'
import { ScrollView,View,StyleSheet } from 'react-native'

import ImageInput from './ImageInput'

export default function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
    const scrollview = useRef()
    
    return (
        <ScrollView ref={scrollview} horizontal onContentSizeChange={()=>scrollview.current.scrollToEnd()}>
            {imageUris.map((uri, index) => (
                <View key = {index} style={styles.image}>
                    <ImageInput
                        imageUri={uri}
                        onChange={()=> onRemoveImage(uri)}
                        />
                </View>
            )
            )}
            <View style={styles.image}>
                <ImageInput onChange={(uri) => onAddImage(uri)} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        margin:5
    }
})
