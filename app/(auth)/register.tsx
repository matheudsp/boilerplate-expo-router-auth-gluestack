import { Link } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterPage() {
    return (
        <SafeAreaView>
            <View className="">
                <Text className="">Welcome to Register!</Text>
            </View>
            <Link href={'/(auth)/login'}>
                <Text>Go to login!</Text>
            </Link>
        </SafeAreaView>
    );
}
