import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import places from '../../assets/data/feed'
import CarusalItem from '../../components/CarusalItem';
import CustomMarker from '../../components/CustomMarker';
const SearchResultMaps = () => {
    const [selectedPlaceId, setSelectedPlaceId] = useState(null)
    const width = Dimensions.get('window').width;
    const flatRef = React.useRef(null);
    const map=React.useRef(null);
    const flatviewRef=React.useRef({itemVisibilityPercentThreshold:70,viewAreaCoveragePercentThreshold:70});
    const flatViewChangeRef=React.useRef(({ viewableItems, changed }) => {
        
        if (viewableItems.length > 0) {
            setSelectedPlaceId(viewableItems[0].item.id)
        }
    });
    useEffect(() => {
        if (!selectedPlaceId || !flatRef) {
            return;
        }
        // console.warn("Scroll To")
        const index = places.findIndex(place => place.id === selectedPlaceId);
        const searchRegion = places[index].coordinate;
        map.current.animateToRegion({
            latitude: searchRegion.latitude,
            longitude: searchRegion.longitude,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
        });
        flatRef.current.scrollToIndex({ index })
    }, [selectedPlaceId])
    return (
        <View style={{ height: '100%', width: '100%' }}>
            <MapView
                ref={map}
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
                            onPress={() => setSelectedPlaceId(item.id)}
                        />
                    )
                })}


            </MapView>
            <View style={{ position: 'absolute', bottom: 10 }}>
                <FlatList
                    ref={flatRef}
                    data={places}
                    renderItem={({ item }) => <CarusalItem post={item} />}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    snapToInterval={width - 50}
                    snapToAlignment="center"
                    decelerationRate="fast"
                    viewabilityConfig={flatviewRef.current}
                    onViewableItemsChanged={flatViewChangeRef.current}
                />

            </View>
        </View>
    )
}

export default SearchResultMaps
