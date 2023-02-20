import React, { useCallback, useEffect } from "react";
import { Dimensions, StyleSheet, View, Button } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SlidingCounter from "./components/SlidingCounter";
import {
    Alert,
    Text,
    HStack,
    VStack,
    IconButton,
    CloseIcon,
} from "native-base";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

const SlidingApp = () => {
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
                <SlidingCounter />
            </GestureHandlerRootView>

            {/* Alert */}
            <Animated.View
                style={[
                    { position: "absolute", bottom: 0, left: 0, right: 0 },
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
                                    <Text fontSize="md" color="coolGray.800">
                                        1) Drag the circle to increase and
                                        decrease
                                    </Text>
                                    <Text fontSize="md" color="coolGray.800">
                                        2) Drag Down to Reset
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
export default SlidingApp;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    text: {
        fontSize: 20,
        color: "red",
        marginVertical: 10,
    },
});
