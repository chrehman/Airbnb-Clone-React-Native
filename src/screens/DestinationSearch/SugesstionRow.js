import React from 'react'
import { View, Text,Pressable } from 'react-native'
import styles from './styles'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/core'

const SugesstionRow = ({ item }) => {
    const navigation=useNavigation();
    return(
    <View>
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                <Entypo name="location-pin" size={30} color="black" />

            </View>
            <Text style={styles.locationText}>{item.description}</Text>
        </View>
    </View>
)}

export default SugesstionRow
