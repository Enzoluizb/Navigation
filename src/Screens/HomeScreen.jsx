import { Button, Text, View } from "react-native"
import { styles } from "../lib/styles";

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Home page</Text>
            <Button title='Ir para Sobre'
                onPress={() => navigation.navigate("Sobre")} />
            <Button title='Ir para Ajuda'
                onPress={() => navigation.navigate("Ajuda")} />
            <Button title='Ir para Histórico de Locais'
                onPress={() => navigation.navigate("Histórico")} />
        </View>
    );
};