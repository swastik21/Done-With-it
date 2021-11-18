<script src="http://192.168.1.8:8097"></script>
import React, { useState } from 'react'
import { FlatList,SafeAreaView,StyleSheet, View} from 'react-native';

import ListItem from '../Components/Lists/ListItem';
import ListItemDeleteAction from '../Components/Lists/ListItemDeleteAction';
import ListItemSeparartor from '../Components/Lists/ListItemSeparartor';
import Screen from '../Components/Screen';

export default function MessageScreen() {
    
    const initialMessages = [
            {
            id:1,
            title:'Amet officia ut enim sit et laborum aliquip laborum culpa sit. Pariatur elit officia ex consectetur dolor proident. Adipisicing amet exercitation officia non aute occaecat cillum mollit voluptate eiusmod irure do. Ea veniam velit duis voluptate labore tempor id mollit ullamco adipisicing nisi. Qui officia excepteur quis est voluptate dolore in. Exercitation dolor proident labore esse ipsum magna velit ipsum mollit velit. Laborum magna nulla aliquip ad labore tempor sunt.',
            description:'Voluptate adipisicing aliqua non culpa minim id laborum in. Nisi dolor quis in aute Lorem est commodo pariatur amet sit dolor sit. Nisi pariatur amet ipsum aliquip veniam. Magna minim tempor duis consectetur voluptate proident ut sit. Ad officia et qui dolor aliquip nostrud esse.',
            image: require('../assets/swastik.jpg')
        },
        {
            id:2,
            title:'Magna esse sint dolor qui occaecat occaecat aliqua consectetur proident amet labore nisi. Adipisicing veniam incididunt exercitation in ad et sint esse ipsum labore sint ullamco laboris. Ad eu quis consequat ipsum quis amet veniam elit. Occaecat elit exercitation est minim ex in commodo fugiat culpa fugiat irure cillum ipsum ut.',
            description:'Duis deserunt voluptate ad velit reprehenderit cillum ullamco Lorem. Irure eu occaecat dolor amet ipsum cillum sit eu fugiat id ullamco minim eiusmod culpa. Aliquip eiusmod quis est incididunt consectetur. Elit elit consequat amet laborum aliqua. Do elit deserunt proident ex dolore velit et nulla eiusmod laborum nisi.',
            image: require('../assets/swastik.jpg')
        }
        
    ]

    const [messages,setMessages] = useState(initialMessages)
    const [refreshing,setRefreshing] = useState(false)

    const handleDelete = message =>{
        setMessages(messages.filter(m => m.id !== message.id))
    }

    return (
        
        <Screen>
            <FlatList
            data={messages}

            keyExtractor={message=>message.id.toString()}
            renderItem={({item})=>
                <ListItem
                title={item.title}
                subTitle={item.description}
                image={item.image}
                onPress={()=> console.log("Message Selected",item)}
                renderRightActions={()=> <ListItemDeleteAction onPress={()=>handleDelete(item)}/>}
                />
            }
            
            ItemSeparatorComponent={ListItemSeparartor}
            refreshing = {refreshing}
            onRefresh = {()=>{
                setMessages([
                    {
                        id:2,
                        title:'Mollit consequat irure sit ad qui cupidatat. Cupidatat esse pariatur est est id amet ipsum. In velit enim enim fugiat occaecat. Qui occaecat sunt non velit officia. Laboris cupidatat enim ad sint commodo anim eiusmod cillum.',
                        description:'Sunt nulla commodo tempor consectetur Lorem nostrud nostrud nostrud enim officia ea et. Deserunt aliqua aliqua nisi sint mollit culpa eiusmod ut minim dolor est consequat. Culpa labore ipsum nulla ut ad cupidatat. Pariatur occaecat magna non dolor culpa pariatur nostrud ipsum laborum sunt. Sint deserunt sit ut id proident eiusmod. Cillum cupidatat magna incididunt consequat eu aliquip exercitation do irure est. Lorem mollit nulla mollit sint.',
                        image: require('../assets/swastik.jpg')
                    },
                ])
            }}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    
})