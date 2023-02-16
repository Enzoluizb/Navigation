import * as React from 'react';
import { Button, View } from "react-native"
import { Searchbar, Text } from "react-native-paper";
import { Image } from 'react-native-web';
import { styles } from "../lib/styles";

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: require("../../assets/senac.png") }}
                style={{ width: 200, height: 200, marginBottom: 20 }}
                resizeMode="contain"
            />
            <Searchbar
                placeholder="Pesquise"
            />
            <View style={styles.container2}>
                <Text variant="headlineLarge">Home page</Text>
                <Button color={'#4261FA'} title='Formulário'
                    onPress={() => navigation.navigate("Formulário")} />
            </View>
        </View>
    );
};