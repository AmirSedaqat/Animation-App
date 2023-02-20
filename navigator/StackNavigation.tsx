import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/Home";
import BallAnimation from "../screens/BallAnimation";
import ScrollView from "../screens/ScrollView/ScrollView";
import SwitchTheme from "../screens/SwitchTheme";
import LikeInstagram from "../screens/LikeInstagram";
import SwipeToDelete from "../screens/SwipeToDelete/SwipeToDelete";
import CircularProgress from "../screens/CirculaProgress";
import SlidingApp from "../screens/SlidingCounter/SlidingApp";
import PerspectiveMenu from "../screens/Perspective.menu";

const StackNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={Home}
            />
            <Stack.Screen name="BallAnimation" component={BallAnimation} />
            <Stack.Screen name="ScrollView" component={ScrollView} />
            <Stack.Screen name="SwitchTheme" component={SwitchTheme} />
            <Stack.Screen name="LikeInstagram" component={LikeInstagram} />
            <Stack.Screen name="SwipeToDelete" component={SwipeToDelete} />
            <Stack.Screen
                name="CircularProgress"
                component={CircularProgress}
            />
            <Stack.Screen name="SlidingCounter" component={SlidingApp} />

            <Stack.Screen name="Prespective Menu" component={PerspectiveMenu} />
        </Stack.Navigator>
    );
};

export default StackNavigation;
