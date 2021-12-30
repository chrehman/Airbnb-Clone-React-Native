import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import styles from './styles'
import search from '../../../Airbnb Assets/search'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/core'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SugesstionRow from './SugesstionRow'


const DestinationSearch = () => {
    const [text, setText] = useState('')
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            
            <GooglePlacesAutocomplete
                placeholder='Where are you going?'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                    navigation.navigate("Guest")
                }}
                fetchDetails
                query={{
                    key: 'AIzaSyBiNdry8vQedDUEQTV-kCrls9N_XHZR8wQ',
                    language: 'en',
                    type:'(cities)'
                }}
                suppressDefaultStyles
                styles={{textInput:styles.textInput}}
                renderRow={(item)=> <SugesstionRow item={item}/>}
                
            />
           
           
            
        </View>
    )
}

export default DestinationSearch
