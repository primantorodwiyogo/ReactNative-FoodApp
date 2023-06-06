import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, StatusBar, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView } from "react-native";
import Appbar from "./components/appbar";
import Content from "./components/content";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <StatusBar barStyle="light-content" backgroundColor='green' />
        <Appbar />
      </View>
      <View>
        <Content />
      </View>
    </SafeAreaView>


  );
};



export default HomeScreen;