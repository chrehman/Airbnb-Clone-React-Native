import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Image, StyleSheet, Text, View ,Pressable} from 'react-native'
import styles from './styles'
const Post = ({post}) => {
    // console.log(post)
    const {bed,bedroom,image,type,title,oldPrice,newPrice,totalPrice}=post
    const navigation =useNavigation();
    return (
        <Pressable style={styles.container}
            onPress={()=>{
                navigation.navigate('Post',{post})
            }}
        >

            <Image source={{uri:image}}
                style={styles.image}
            />
            <Text style={styles.bedroom}>{bed} bed {bedroom} bedroom</Text>
            <Text style={styles.description} numberOfLines={2}>{type}. {title}</Text>
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${oldPrice}</Text>
                <Text style={styles.price}>  ${newPrice} </Text>
                / night  
            </Text>
            <Text style={styles.totalPrice}>
                ${totalPrice} total
            </Text>
        </Pressable>
    )
}

export default Post

