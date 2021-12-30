import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import styles from './styles'
const CarusalItem = ({ post }) => {
    // console.log(post)
    const { bed, bedroom, image, type, title, oldPrice, newPrice, totalPrice } = post
    const width=Dimensions.get('window').width;
    return (
        <View style={{...styles.container,width:width-60 }}>

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
        </View>
    )
}

export default CarusalItem

