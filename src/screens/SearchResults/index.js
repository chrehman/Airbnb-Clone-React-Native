import React from 'react'
import { StyleSheet, Text, View ,FlatList} from 'react-native'
import Post from '../../components/post'
import feed from '../../assets/data/feed'

const SearchResults = () => {
    return (
        <View>
            
            <FlatList
                data={feed}
                renderItem={({ item }) => <Post post={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default SearchResults

const styles = StyleSheet.create({})
