import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import React, { useState, useCallback } from "react";
import ListItem from "./components/ListItem";
import { Alert, CloseIcon, HStack, IconButton, VStack } from "native-base";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

const TITLES = [
    "Learning TypeScript Course 👾",
    "Learning React Native Course 💙",
    "Reanimated 2 Course 👽",
    "Learning React Navigation Course 🎩",
];

export interface TaskInterface {
    title: string;
    index: number;
}
const Tasks: TaskInterface[] = TITLES.map((title, index) => ({ title, index }));

const SwipeToDelete = () => {
    // States
    const [tasks, setTasks] = useState(Tasks);

    //LOGIC Remove from State with Dismiss Task
    const onDismiss = useCallback((task: TaskInterface) => {
        setTasks((tasks) => tasks.filter((item) => item.index !== task.index));
    }, []);
    //LOGIC Remove from State with Dismiss Task
    const { width: SCREEN_WIDTH } = Dimensions.get("window");
    const translateX = useSharedValue(0);
    const rCloseStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: translateX.value,
            },
        ],
    }));
    return (
        <>
            <GestureHandlerRootView style={styles.container}>
                <StatusBar style="auto" />

                <Text style={styles.title}>Tasks</Text>

                <ScrollView>
                    {tasks.map((task) => (
                        <ListItem
                            key={task.index}
                            task={task}
                            onDismiss={onDismiss}
                        />
                    ))}
                </ScrollView>
            </GestureHandlerRootView>

            {/* Alert  */}
            <Animated.View
                style={[
                    { position: "absolute", bottom: 0, right: 0, left: 0 },
                    rCloseStyle,
                ]}
            >
                <Alert w="100%" status="info">
                    <VStack space={2} flexShrink={1} w="100%">
                        <HStack
                            flexShrink={1}
                            space={2}
                            justifyContent="space-between"
                        >
                            <HStack space={2} flexShrink={1}>
                                <Alert.Icon mt="1" size={6} />
                                <VStack>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            color: "coolGray.800",
                                            margin: 5,
                                        }}
                                    >
                                        To remove, drag tasks to the left
                                    </Text>
                                </VStack>
                            </HStack>
                            <IconButton
                                onPress={() => {
                                    translateX.value = withTiming(SCREEN_WIDTH);
                                }}
                                variant="unstyled"
                                _focus={{
                                    borderWidth: 0,
                                }}
                                icon={<CloseIcon size="5" />}
                                _icon={{
                                    color: "coolGray.600",
                                }}
                            />
                        </HStack>
                    </VStack>
                </Alert>
            </Animated.View>
        </>
    );
};

export default SwipeToDelete;

const BACKGROUND_COLOR = "#FAFBFF";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
    },
    title: {
        fontSize: 50,
        marginVertical: 10,
        padding: 15,
    },
});
