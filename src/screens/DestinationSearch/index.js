import React, { useState } from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'
import styles from './styles'
import search from '../../../Airbnb Assets/search'
import Entypo from 'react-native-vector-icons/Entypo'

const DestinationSearch = () => {
    const [text, setText] = useState('')
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
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name="location-pin" size={30} color="black"  />

                            </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default DestinationSearch
