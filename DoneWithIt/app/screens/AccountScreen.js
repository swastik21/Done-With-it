import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native';

import Icon from '../Components/Icon';
import ListItem from '../Components/Lists/ListItem';
import ListItemSeparartor from '../Components/Lists/ListItemSeparartor';
import Screen from '../Components/Screen';
import colors from '../config/colors';
import Routes from '../Navigation/Routes';

export default function AccountScreen({navigation}) {
    const menuItems = [
        {
            title: 'My Listings',
            icon:{
                name:'format-list-bulleted',
                backgroundColor:colors.primary
            }
        },
        {
            title: 'My Messages',
            icon:{
                name:'email',
                backgroundColor:colors.secondary
            },
            targetScreen: Routes.MESSAGES,
        },
    ]
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                title='Swastik Poojari' 
                subTitle='swastikpoojari21@gmail.com' 
                image={require('../assets/swastik.jpg')}/>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menu => menu.title}
                    renderItem={({item})=>(
                        <ListItem
                        title={item.title}
                        ImageComponent={
                            <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                        }
                        onPress={()=>navigation.navigate(item.targetScreen)}
                        />
                    )}
                    ItemSeparatorComponent={ListItemSeparartor}
                />
            </View>
            <View style={styles.container}>
                <ListItem title='Logout' ImageComponent={
                    <Icon name='logout' backgroundColor='#ffe66d'/>
                }/>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical:20,
    },
    screen:{
        backgroundColor:colors.light,
        flex:1
    }
})