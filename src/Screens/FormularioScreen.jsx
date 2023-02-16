import { Button, View } from "react-native"
import { IconButton, TextInput, Text } from "react-native-paper"
import { Image } from "react-native-web"
import { styles } from "../lib/styles"

export const FormularioScreen = ({ navigation }) => {
    return (
        <View style={styles.formulario}>
            <Image
        source={{ uri: require("../../assets/senac.png") }}
        style={{ width: 200, height: 200, marginBottom: 20 }}
        resizeMode="contain"
      />
            <Text variant="headlineLarge">Formulário de usuário</Text>
            <TextInput
                label="Nome"
            />
            <TextInput
                label="Sobrenome"
            />
            <TextInput
                label="Senha"
            />
            <View style={styles.formulario2}>
            <Text variant="titleLarge">Insira sua foto</Text>
            <IconButton icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </IconButton>
            </View>
            <View style={styles.formulario3}>
            <Button color={'#4261FA'} title="Cadastrar" onPress={() => navigation.navigate("")}
            ></Button>
            <Button color={'#4261FA'} title="volte" onPress={() => navigation.navigate("Home")}
            ></Button>
            </View>
        </View>
    )
}