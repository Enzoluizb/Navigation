import { Button, Text, View } from "react-native"
import { styles } from "../lib/styles"

export const AjudaScreen =({navigation}) =>{
    return(
        <View style={styles.container}>
            <Text>Ajuda</Text>
            <Button title = "volte" onPress={() =>navigation.navigate("Home")}
            ></Button>
        </View>
    )
}