import { Button, Text, View } from "react-native"

export const SobreScreen =({navigation}) =>{
    return(
        <View>
            <Text>Sobre</Text>
            <Button title = "volte" onPress={() =>navigation.navigate("Home")}
            ></Button>
        </View>
    )
}