import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigator/StackNavigation";
import { NativeBaseProvider } from "native-base";

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <StackNavigation />
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
