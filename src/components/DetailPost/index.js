import React from 'react'
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import styles from './styles'
const DetailPost = ({ post }) => {
    // console.log(post)
    const { bed, bedroom, image, type, title, oldPrice, newPrice, totalPrice, longDescription } = post
    return (
        <ScrollView>
            <View style={styles.container}>

                <Image source={{ uri: image }}
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
                <Text style={styles.longDescription}>
                    {longDescription}
                </Text>
            </View>
        </ScrollView>
    )
}

export default DetailPost

