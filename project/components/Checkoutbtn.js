import React from "react";
import {Text, TouchableOpacity } from "react-native";

const Checkoutbtn = ({onPress}) =>{
    return(
        <TouchableOpacity style={{
            marginTop:15,
            width: '80%',
            height: 40,
            backgroundColor: '#2596be',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            alignSelf: 'center'

        }} onPress={onPress}>
            <Text style={{color: 'white', fontSize: 16}}>
                Check Out
            </Text>
        </TouchableOpacity>
    )
}


export {Checkoutbtn}