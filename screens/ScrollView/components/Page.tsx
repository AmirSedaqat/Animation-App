import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
} from "react-native-reanimated";

// INTERFACE
interface PageProps {
    titleProps: string;
    indexProps: number;
    translateXProps: Animated.SharedValue<number>;
}
const { height, width } = Dimensions.get("window");
const SIZE = width * 0.7;

const Page: React.FC<PageProps> = ({
    titleProps,
    indexProps,
    translateXProps,
}) => {
    const inputRange = [
        (indexProps - 1) * width,
        indexProps * width,
        (indexProps + 1) * width,
    ];
    const reanimatedStyle = useAnimatedStyle(() => {
        const scaleInterpolate = interpolate(
            translateXProps.value,
            inputRange,
            [0, 1, 0],
            Extrapolate.CLAMP
        );
        const borderRadiusInterpolate = interpolate(
            translateXProps.value,
            inputRange,
            [0, SIZE / 2, 0],
            Extrapolate.CLAMP
        );
        return {
            borderRadius: borderRadiusInterpolate,
            transform: [{ scale: scaleInterpolate }],
        };
    });
    const rTextStyle = useAnimatedStyle(() => {
        const translateY = interpolate(
            translateXProps.value,
            inputRange,
            [200, 0, -200]
        );
        const opacity = interpolate(
            translateXProps.value,
            inputRange,
            [-1, 1, -1]
        );

        return { transform: [{ translateY }], opacity };
    });
    return (
        <View
            style={[
                styles.pageContainer,
                { backgroundColor: `rgba(100,140,100,0.${indexProps + 5})` },
            ]}
        >
            <Animated.View style={[styles.square, reanimatedStyle]} />
            <Animated.View style={[{ position: "absolute" }, rTextStyle]}>
                <Text style={styles.text}>{titleProps}</Text>
            </Animated.View>
        </View>
    );
};
export default Page;

const styles = StyleSheet.create({
    pageContainer: {
        height,
        width,
        justifyContent: "center",
        alignItems: "center",
    },
    square: {
        width: SIZE,
        height: SIZE,
        backgroundColor: "rgba(10,28,24,.7)",
    },
    text: {
        color: "white",
        fontSize: SIZE / 6,
        fontWeight: "700",
        textTransform: "uppercase",
    },
});
