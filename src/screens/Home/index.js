import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Dimensions, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
const Home = () => {
    const navigation=useNavigation();
    return (
        <View>
              <Pressable
                onPress={()=>{
                    navigation.navigate('Search')
                }}
                style={{
                    borderRadius:30,
                    backgroundColor:'#fff',
                    width:Dimensions.get('window').width-60,
                    padding:10,
                    flexDirection:'row',
                    position:'absolute',
                    top:50,
                    height:60,
                    zIndex:1,
                    justifyContent:'center',
                    alignItems:'center',
                    marginHorizontal:30,


                }}

                >
                    <Fontisto name="search" size={20} color="#f15454" />
                    <Text style={{
                        fontWeight:'bold',
                        marginLeft:5

                    }}>Where are you going?</Text>
                </Pressable>
            <ImageBackground
            source={require('../../assets/images/wallpaper.jpg')}
            style={{
                width: '100%',
                height:'100%',
                resizeMode: 'cover',
                justifyContent:'center'
            }}
            >
                <Text style={{
                    fontSize:80,
                    fontWeight:'bold',
                    color:'#fff',
                    width:'70%',
                    marginLeft:20
                }}>
                    Go Near
                </Text>
                <Pressable
                onPress={()=>{

                }}
                style={{
                    marginLeft:20,
                    borderRadius:10,
                    backgroundColor:'#fff',
                    width:200,
                    padding:10,
                    justifyContent:'center',
                    alignItems:'center',
                }}

                >
                    <Text style={{
                        fontWeight:'bold',


                    }}>Explore nearby stays</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
