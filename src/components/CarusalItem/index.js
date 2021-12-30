import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import styles from './styles'
const CarusalItem = ({ post }) => {
    // console.log(post)
    const { bed, bedroom, image, type, title, oldPrice, newPrice, totalPrice } = post
    const width=Dimensions.get('window').width;
    const navigation = useNavigation();
    return (
        <Pressable style={{...styles.container,width:width-60 }}
        onPress={()=>{
            navigation.navigate('Post',{post})
        }}
        >

            <Image source={{ uri: image }}
                style={styles.image}
            />
            <View style={styles.textConatainer}>
                <Text style={styles.bedroom}>{bed} bed {bedroom} bedroom</Text>
                <Text style={styles.description} numberOfLines={2}>{type}. {title}</Text>
                <Text style={styles.prices}>
                    
                    <Text style={styles.price}>${newPrice} </Text>
                    / night
                </Text>
                
            </View>
        </Pressable>
    )
}

export default CarusalItem

