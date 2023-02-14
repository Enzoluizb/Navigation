import { Button, Text, View } from "react-native"

export const HistoricoScreen =({navigation}) =>{
    return(
        <View>
            <Text>Histórico de Locais</Text>
            <Button title = "volte" onPress={() =>navigation.navigate("Home")}
            ></Button>
        </View>
    )
}