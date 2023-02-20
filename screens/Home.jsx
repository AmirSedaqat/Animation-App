import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    Pressable,
    Dimensions,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Stack } from "native-base";
const Home = ({ navigation }) => {
    const { width, height } = Dimensions.get("window");

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ImageBackground
                source={require("../assets/bg.jpg")}
                resizeMode="cover"
                style={{
                    height: height + 50,
                    width: width,
                }}
            >
                <Stack flexDirection={"row"}>
                    <Stack
                        mb="2.5"
                        mt="10"
                        direction={{
                            base: "column",
                            md: "row",
                        }}
                        space={2}
                        mx={{
                            base: "auto",
                            md: "0",
                        }}
                    >
                        <Button
                            size="lg"
                            variant="subtle"
                            mt={3}
                            onPress={() => {
                                navigation.navigate("SwitchTheme");
                            }}
                        >
                            SwitchTheme
                        </Button>
                        <Button
                            size="lg"
                            mt={3}
                            variant="subtle"
                            onPress={() => {
                                navigation.navigate("BallAnimation");
                            }}
                        >
                            Ball Animation
                        </Button>
                        <Button
                            size="lg"
                            mt={3}
                            variant="subtle"
                            onPress={() => {
                                navigation.navigate("LikeInstagram");
                            }}
                        >
                            Like Instagram
                        </Button>
                        <Button
                            size="lg"
                            mt={3}
                            variant="subtle"
                            onPress={() => {
                                navigation.navigate("ScrollView");
                            }}
                        >
                            ScrollView
                        </Button>
                    </Stack>
                    <Stack
                        mb="2.5"
                        mt="10"
                        direction={{
                            base: "column",
                            md: "row",
                        }}
                        space={2}
                        mx={{
                            base: "auto",
                            md: "0",
                        }}
                    >
                        <Button
                            size="lg"
                            mt={3}
                            variant="subtle"
                            onPress={() => {
                                navigation.navigate("SwipeToDelete");
                            }}
                        >
                            Swipe To Delete
                        </Button>
                        <Button
                            size="lg"
                            mt={3}
                            variant="subtle"
                            onPress={() => {
                                navigation.navigate("CircularProgress");
                            }}
                        >
                            Circular Progress
                        </Button>
                        <Button
                            size="lg"
                            mt={3}
                            variant="subtle"
                            onPress={() => {
                                navigation.navigate("SlidingCounter");
                            }}
                        >
                            Sliding Counter
                        </Button>
                        <Button
                            size="lg"
                            mt={3}
                            variant="subtle"
                            onPress={() => {
                                navigation.navigate("Prespective Menu");
                            }}
                        >
                            Prespective Menu
                        </Button>
                    </Stack>
                </Stack>
            </ImageBackground>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 20,
        backgroundColor: "rgba(200, 0, 0, 0.8)",
        margin: 100,
    },
});
