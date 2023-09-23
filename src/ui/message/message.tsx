import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, StatusBar, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Appbar from "./components/appbar";

const MessageScreen = () => {
  return (
    <SafeAreaView>
      <View>
        {/* <StatusBar barStyle="light-content" backgroundColor='green' /> */}
        <Appbar />
      </View>
      <View>
        <Text>Messages</Text>
      </View>
    </SafeAreaView>

  );
};



export default MessageScreen;