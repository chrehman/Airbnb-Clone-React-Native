import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        margin: 5,
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        // overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 9,
        
    },
    image: {
        width: 150,
        height: 150,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        // aspectRatio:3/3,

        resizeMode: 'cover'
    },
    bedroom: {
        paddingVertical: 10,
        color: '#5b5b5b',
    },
    description: {
        lineHeight: 25,
        fontSize: 18

    },
    prices: {
        fontSize: 18,
        marginVertical: 10,
    },
    oldPrice: {
        color: "#5b5b5b",
        textDecorationLine: 'line-through'
    },
    price: {
        fontWeight: 'bold',
    },
    totalPrice: {
        color: "#5b5b5b",
        textDecorationLine: 'underline',

    },
    textConatainer: {
        flex: 1,
        marginHorizontal: 10
    }
});