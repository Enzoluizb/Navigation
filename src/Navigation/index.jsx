import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FormularioScreen } from "../Screens/FormularioScreen";
import { HomeScreen } from "../Screens/HomeScreen";

const Stack = createNativeStackNavigator()
// const MaterialBottomTabs = createMaterialBottomTabNavigator();

export const RootNavigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={HomeScreen} />
            <Stack.Screen name={'Formulário'} component={FormularioScreen} />
        </Stack.Navigator>
    );
};