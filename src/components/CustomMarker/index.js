import React from 'react'
import { View, Text } from 'react-native'
import { Marker } from 'react-native-maps'

const CustomMarker = ({cordinate,price,isSelected,onPress}) => {
    return (
        
        <Marker
            coordinate={cordinate} onPress={onPress}
        >
            <View style={{
                backgroundColor: isSelected?"#000":'#fff',
                padding: 5,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: 'grey'
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    color:isSelected?"#fff":"#000"

                }}>${price}</Text>
            </View>
        </Marker>
    )
}

export default CustomMarker
