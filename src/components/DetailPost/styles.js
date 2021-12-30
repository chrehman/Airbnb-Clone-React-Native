import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    image: {
        width: '100%',
        height:300,
        // aspectRatio:3/3,
        borderRadius: 10,
        resizeMode: 'cover'
    },
    bedroom: {
        paddingVertical:10,
        color:'#5b5b5b'
    },
    description: {
        fontSize:18,
        lineHeight:25,

    },
    prices: {
        fontSize:18,
        marginVertical:10,
    },
    oldPrice: {
        color:"#5b5b5b",
        textDecorationLine:'line-through'
    },
    price: {
        fontWeight:'bold',
    },
    totalPrice: {
        color:"#5b5b5b",
        textDecorationLine:'underline',
        
    },
    longDescription:{
        fontSize:16,
        lineHeight:24,
        marginVertical:20

    }

});