import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import styles from './styles'
import search from '../../../Airbnb Assets/search'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/core'

const DestinationSearch = () => {
    const [text, setText] = useState('')
    const navigation=useNavigation();
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                value={text}
                onChangeText={setText}
                placeholder="Where are you going?"
            />
            <FlatList
                data={search}
                renderItem={({ item }) => (
                    <Pressable onPress={()=> navigation.navigate("Guest")}>
                        <View style={styles.row}>
                            <View style={styles.iconContainer}>
                                <Entypo name="location-pin" size={30} color="black" />

                            </View>
                            <Text style={styles.locationText}>{item.description}</Text>
                        </View>
                    </Pressable>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default DestinationSearch
