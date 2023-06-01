import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, StatusBar, TextInput, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View style={{
      flex:1,
      backgroundColor:'#f1f7ed'
    }}>
      <StatusBar barStyle="light-content" backgroundColor="#7ca982" />
      <View style={{
        height: 55,
        paddingHorizontal: 15,
        flexDirection: 'row',
        backgroundColor: '#7ca982',
        justifyContent: "space-between",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
      }}>
        <TouchableOpacity style={{marginTop:10}}>
          <Icon name="grid-outline" color={'#f1f7ed'} size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop:10}}>
          <Icon name="notifications-outline" color={'#f1f7ed'} size={25} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{
          fontSize:25,
          fontWeight:"bold"
        }}>Hi, Primantoro!</Text>
        <Text style={{
          color:'#243e36'
        }}>What do you want to order to day?</Text>
      </View>
      <View>
        <Text>menu</Text>
      </View>
      <View>
        <Text>content</Text>
      </View>
    </View>
  );
};



export default HomeScreen;