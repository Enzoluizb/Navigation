import { Button, Text, View } from "react-native"
import { styles } from "../lib/styles"

export const SobreScreen =({navigation}) =>{
    return(
        <View style={styles.container}>
            <Text>Sobre</Text>
            <Button title = "volte" onPress={() =>navigation.navigate("Home")}
            ></Button>
        </View>
    )
}