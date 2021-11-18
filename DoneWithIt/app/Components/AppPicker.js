import React, { useState } from 'react'
import { TextInput, View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList,Text, PickerIOSItem } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import AppText from './AppText'
import PickerItem from './PickerItem'

export default function AppPicker({icon,items,numberOfColumns=1,onSelectItem,placeholder,PickerItemComponent=PickerItem,selectedItem,width='100%'}) {
    const [modalVisible,setmodalVisible] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={()=> setmodalVisible(true)}>
            
            <View style={[styles.container,{width}]}>
                    {icon && <MaterialCommunityIcons name={icon} size={25} color={colors.medium} style={styles.icon} />}
                    {selectedItem
                        ? <AppText style={styles.text}>{selectedItem}</AppText>
                        : <AppText style={styles.placeholder}>{placeholder}</AppText>}
                <MaterialCommunityIcons name='chevron-down' size={20} color={colors.medium}  />
            </View>

            </TouchableWithoutFeedback>
            
            <Modal visible={modalVisible} animationType='slide'>
                <Button title='Close' onPress={()=> setmodalVisible(false)}/>
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.value.toString()}
                    numColumns={numberOfColumns}
                    renderItem={({item}) => (
                        <PickerItemComponent
                            item={item}
                            onPress={()=> {
                                setmodalVisible(false);
                                onSelectItem(item.l);
                            }}
                        />
                    )}
                />
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.light,
        borderRadius:25,
        flexDirection:'row',
        padding:15,
        marginVertical:10
    },
    icon:{
        marginRight:10
    },
    placeholder: {
        color: colors.medium,
        flex:1
    },
    text:{
        flex:1,
    }
})
