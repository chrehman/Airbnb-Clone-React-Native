import { useRoute } from '@react-navigation/core'
import React from 'react'
import { View, Text } from 'react-native'
import posts from '../../assets/data/feed'
import places from '../../assets/data/search'
import DetailPost from '../../components/DetailPost'
const PostScreen = () => {
    const post = useRoute().params.post
    return (
        <View style={{backgroundColor:'#fff'}}>
            <DetailPost post={post}/>
        </View>
    )
}

export default PostScreen
