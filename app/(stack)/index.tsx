import { Button, ButtonText } from "@/gluestack/ui/button";
import { Link } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <View className="">
                <Text className="">Welcome to Stack!</Text>
            </View>

            <Link className="mx-4 mt-4" href={'/(tabs)/tabOne'} asChild>
                <Button size="md" variant="solid" action="primary">
                    <ButtonText>Go to Tabs!</ButtonText>
                </Button>
            </Link>
            <Link className="mx-4 mt-4" href={'/(auth)/login'} asChild>
                <Button size="md" variant="solid" action="primary">
                    <ButtonText>Go to Auth!</ButtonText>
                </Button>
            </Link>
        </SafeAreaView>
    );
}
