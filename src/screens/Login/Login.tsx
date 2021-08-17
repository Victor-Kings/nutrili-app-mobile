import React from "react";
import { Text, View ,Button} from "react-native";

export function Login ({ navigation }:any){
    return(
        <View>
            <Text>OPVAAAAAAAAAAAAAAA</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}
