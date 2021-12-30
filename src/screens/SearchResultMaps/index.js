import React, { useState } from 'react'
import { View, Text } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import places from '../../assets/data/feed'
import CustomMarker from '../../components/CustomMarker';
const SearchResultMaps = () => {
    const [selectedPlaceId, setSelectedPlaceId] = useState(null)
    return (
        <View style={{ height: '100%', width: '100%' }}>
            <MapView
                style={{ height: '100%', width: '100%' }}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 28.3279822,
                    longitude: -16.512404,
                    latitudeDelta: 0.7,
                    longitudeDelta: 0.7,
                }}

            >
                {places.map((item, index) => {
                    return (
                        <CustomMarker
                            key={index} cordinate={item.coordinate}
                            price={item.newPrice}
                            isSelected={item.id === selectedPlaceId} 
                            onPress={()=> setSelectedPlaceId(item.id)}
                            />
                    )
                })}


            </MapView>
        </View>
    )
}

export default SearchResultMaps
