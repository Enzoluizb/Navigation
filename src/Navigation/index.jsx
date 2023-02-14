import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AjudaScreen } from "../Screens/AjudaScreen";
import { HistoricoScreen } from "../Screens/HistoricoScreen";
import { HomeScreen } from "../Screens/HomeScreen";
import { SobreScreen } from "../Screens/SobreScreen";

const Stack = createNativeStackNavigator()
// const MaterialBottomTabs = createMaterialBottomTabNavigator();

export const RootNavigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={HomeScreen} />
            <Stack.Screen name={'Sobre'} component={SobreScreen} />
            <Stack.Screen name={'Ajuda'} component={AjudaScreen} />
            <Stack.Screen name={'Histórico'} component={HistoricoScreen} />
        </Stack.Navigator>
    );
};