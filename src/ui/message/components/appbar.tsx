import React from "react";
import {
    Text,
    StatusBar,
    TextInput,
    View
} from "react-native";

const Appbar = () => {
    return (
        <View style={{
            height: 60,
            backgroundColor: 'green',
        }}>
            <View>
                <Text>helos</Text>
            </View>

            {/* <TextInput
                placeholder="Cari"
                style={{
                    height: 40,
                    margin: 10,
                    backgroundColor: 'white',
                    borderRadius: 5,
                }}
            /> */}
        </View>
    )
}

export default Appbar;