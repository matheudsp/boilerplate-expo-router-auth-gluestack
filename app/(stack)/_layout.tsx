
import { Stack } from "expo-router/stack";

export default function StackLayout() {
    return (
       
            <Stack screenOptions={{ headerShown: false }}>
                
                <Stack.Screen
                    name="index"
                    options={{
                        title: "Index",

                    }}
                />
                {/* <Stack.Screen
                name="register"
                options={{
                    title: "Registrar",
                }}
            /> */}
            </Stack>
       
    );
}
