import { Button, Text, View } from "react-native"

export const AjudaScreen =({navigation}) =>{
    return(
        <View>
            <Text>Ajuda</Text>
            <Button title = "volte" onPress={() =>navigation.navigate("Home")}
            ></Button>
        </View>
    )
}