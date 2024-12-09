import { Stack } from "expo-router/stack";

export default function PublicLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="login"
                options={{
                    title: "Login",

                }}
            />
            <Stack.Screen
                name="register"
                options={{
                    title: "Register",
                }}
            />
        </Stack>
    );
}
