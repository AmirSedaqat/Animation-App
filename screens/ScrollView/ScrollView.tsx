import { StyleSheet, Text, View } from "react-native";
import Animated, {
    useAnimatedScrollHandler,
    useSharedValue,
} from "react-native-reanimated";
import Page from "./components/Page";

const WORDS = ["Fast", "safe", "Support", "modern"];

export default function ScrollView() {
    const translateX = useSharedValue(0);

    const scrollHandlerX = useAnimatedScrollHandler((event) => {
        translateX.value = event.contentOffset.x;
    });

    return (
        <Animated.ScrollView
            pagingEnabled
            horizontal
            onScroll={scrollHandlerX}
            scrollEventThrottle={16}
            style={styles.container}
        >
            {WORDS.map((title, index) => {
                return (
                    <Page
                        key={index.toString()}
                        titleProps={title}
                        indexProps={index}
                        translateXProps={translateX}
                    />
                );
            })}
        </Animated.ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
