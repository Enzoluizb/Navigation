import { Button, Text, View } from "react-native"
import { styles } from "../lib/styles"

export const HistoricoScreen =({navigation}) =>{
    return(
        <View style={styles.container}>
            <Text>Histórico de Locais</Text>
            <Button title = "volte" onPress={() =>navigation.navigate("Home")}
            ></Button>
        </View>
    )
}