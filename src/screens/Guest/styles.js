import { StyleSheet } from "react-native"
export default styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor:'#8f8f8f',
        paddingVertical:20,
        borderBottomWidth:1,
    },  
    buttonContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    button:{
        width:30,
        height:30,
        borderColor:'black',
        borderWidth:1,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        
    },
    buttonText:{
        // marginHorizontal:10,
        fontSize:20,
        color:'#474747'
    },
    title:{
        fontWeight:'bold',
    },
    description:{
        color:'#8d8d8d',
    }

    
})