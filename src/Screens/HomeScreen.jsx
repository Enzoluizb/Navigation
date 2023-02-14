import { Button, Text, View } from "react-native"
import { styles } from "../lib/styles";

export const HomeScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Text>Home page</Text>
            <Button title='Ir para Sobre'
             onPress={() => navigation.navigate("Sobre")}></Button> 
           </View>
    );
};