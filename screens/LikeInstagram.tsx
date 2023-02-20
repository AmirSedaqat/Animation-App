import { StatusBar } from "expo-status-bar";
import { Alert, CloseIcon, HStack, IconButton, VStack } from "native-base";
import { useCallback, useRef } from "react";
import {
    Dimensions,
    Image,
    Text,
    ImageBackground,
    StyleSheet,
} from "react-native";
import {
    GestureHandlerRootView,
    TapGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withSpring,
    withTiming,
} from "react-native-reanimated";

const AnimatedImage = Animated.createAnimatedComponent(Image);

export default function LikeInstagram() {
    const { width: SCREEN_WIDTH } = Dimensions.get("window");
    const translateX = useSharedValue(0);
    const rCloseStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: translateX.value,
            },
        ],
    }));

    const doubleTap = useRef();
    // Shared Value
    const scaleSharedValue = useSharedValue(0);
    const opacitySharedValue = useSharedValue(1);

    // Animated Styles
    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: Math.max(scaleSharedValue.value, 0) }],
        };
    });
    const rTextStyle = useAnimatedStyle(() => {
        return { opacity: opacitySharedValue.value };
    });
    // Animated Styles

    // Logic
    const onSingleTap = useCallback(() => {
        opacitySharedValue.value = withTiming(0, undefined, (isFinished) => {
            if (isFinished) opacitySharedValue.value = withTiming(1);
        });
    }, []);

    const onDoubleTap = useCallback(() => {
        scaleSharedValue.value = withSpring(1, undefined, (isFinished) => {
            if (isFinished)
                scaleSharedValue.value = withDelay(400, withSpring(0));
        });
    }, []);

    return (
        <>
            <GestureHandlerRootView style={styles.container}>
                <StatusBar style="auto" />

                <TapGestureHandler
                    waitFor={doubleTap}
                    onActivated={onSingleTap}
                >
                    <TapGestureHandler
                        numberOfTaps={2}
                        maxDelayMs={300}
                        onActivated={onDoubleTap}
                        ref={doubleTap}
                    >
                        <Animated.View>
                            <ImageBackground
                                source={require("../assets/IMG_Tehran.jpg")}
                                style={styles.post}
                            >
                                <AnimatedImage
                                    source={require("../assets/like.png")}
                                    style={[styles.image, rStyle]}
                                />
                            </ImageBackground>
                            <Animated.Text style={[styles.heart, rTextStyle]}>
                                ❤️❤️❤️❤️
                            </Animated.Text>
                        </Animated.View>
                    </TapGestureHandler>
                </TapGestureHandler>

                {/* Alert  */}
                <Animated.View
                    style={[{ position: "absolute", bottom: 0 }, rCloseStyle]}
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
                                            {" "}
                                            Double click on the photo to like
                                        </Text>
                                    </VStack>
                                </HStack>
                                <IconButton
                                    onPress={() => {
                                        translateX.value =
                                            withTiming(SCREEN_WIDTH);
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
            </GestureHandlerRootView>
        </>
    );
}

const { width: POST_SIZE } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    post: {
        width: POST_SIZE,
        height: POST_SIZE,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        resizeMode: "center",
        width: POST_SIZE * 0.25,
        height: POST_SIZE * 25,
        position: "absolute",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
    },
    heart: {
        fontSize: 30,
        alignSelf: "center",
        marginVertical: 30,
    },
});
