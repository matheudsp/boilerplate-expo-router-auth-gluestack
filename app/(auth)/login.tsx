


import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { VStack } from "@/gluestack/ui/vstack";

import { Text } from "@/gluestack/ui/text";


import { Center } from "@/gluestack/ui/center";
import AuthFields from "@/src/components/Auth/AuthFields";
import { Heading } from "@/gluestack/ui/heading";





export default function LoginPage() {





    return (
        <SafeAreaView className={``}>
            <Center className="h-full w-full p-4 max-w-md mx-auto">
                <VStack space="xl">
                    <Heading className="text-center text-lg font-bold">Welcome! ⚠️ </Heading>
                    <Text>
                        This is a simple repo that emulates a login authentication workflow
                        using Expo Router, focused on the navigation aspect.
                    </Text>

                    <AuthFields />
                </VStack>
            </Center>
        </SafeAreaView>
    );
}

