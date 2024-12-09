
import { Box } from "@/gluestack/ui/box";
import { Button, ButtonText } from "@/gluestack/ui/button";
import { Center } from "@/gluestack/ui/center";
import { useSession } from "@/src/contexts/Authentication";
import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabOne() {
    const { signOut, session } = useSession();
    return (
        <SafeAreaView>
            <Box>
                <Text>Welcom to TabOne!</Text>
            </Box>
            <Link className="mx-4" href={'/(stack)/'} asChild>
                <Button size="md" variant="solid" action="primary">
                    <ButtonText>Go to Stack</ButtonText>
                </Button>
            </Link>

            <Link className="mx-4 mt-4" href={'/(auth)/login'} asChild>
                <Button size="md" variant="solid" action="primary">
                    <ButtonText>Go to Auth</ButtonText>
                </Button>
            </Link>

            <Button

                onPress={() => {
                    // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
                    signOut();
                }}
            >
                <ButtonText>
                    SignOut
                </ButtonText>
            </Button>
        </SafeAreaView>
    );
}
