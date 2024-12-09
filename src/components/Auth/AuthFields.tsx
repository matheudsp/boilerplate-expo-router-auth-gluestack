import { Button, ButtonText } from "@/gluestack/ui/button";
import { useForm, Resolver, Controller } from "react-hook-form";
import { AlertCircleIcon, EyeIcon, EyeOffIcon, MailIcon } from "lucide-react-native";
import { VStack } from "@/gluestack/ui/vstack";
import { LinkText } from "@/gluestack/ui/link";
import { Box } from "@/gluestack/ui/box";
import { Text } from "@/gluestack/ui/text";
import { Link, router } from "expo-router";
import { Input, InputField, InputIcon, InputSlot } from "@/gluestack/ui/input";
import { useSession } from "@/src/contexts/Authentication";
import { useState } from "react";
import { Heading } from "@/gluestack/ui/heading";

type FormValues = {
    email: string;
    password: string;
}

const AuthFields = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const { signIn } = useSession();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        console.log("Login Data:", data);

        signIn()

        router.replace('/')
    }

    return (
        <VStack space="xl">
            <Box>
                <Text className="text-typography-500 leading-1 font-medium text-lg" >E-mail</Text>
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: "O e-mail é obrigatório",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Formato de e-mail inválido",
                        },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            size="xl"

                        >

                            <InputField
                                onChangeText={onChange}
                                value={value}
                                onBlur={onBlur}
                                placeholder="Informe seu e-mail"
                                keyboardType="email-address"
                            />
                            <InputSlot className="p-3 bg-typography-100">
                                <InputIcon
                                    size={20}
                                    className="text-typography-700"
                                    as={MailIcon}
                                />
                            </InputSlot>
                        </Input>
                    )}
                />
                {
                    errors.email && (
                        <Text className="text-error-500 text-sm font-semibold">{errors.email.message}</Text>
                    )
                }
            </Box >

            <Box>
                <Text className="text-typography-500 leading-1 font-medium text-lg" >Senha</Text>
                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: "A senha é obrigatória",
                        minLength: {
                            value: 6,
                            message: "A senha deve ter no mínimo 6 caracteres",
                        },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            size="xl"
                        >
                            <InputField
                                onChangeText={onChange}
                                value={value}
                                secureTextEntry={showPassword}
                                onBlur={onBlur}
                                placeholder="Informe sua senha"

                            />
                            <InputSlot className="p-3 bg-typography-100" onPress={() => {
                                setShowPassword(!showPassword)
                            }}>
                                <InputIcon
                                    size={20}
                                    className="text-typography-700"
                                    as={showPassword ? EyeIcon : EyeOffIcon}
                                />
                            </InputSlot>
                        </Input>
                    )}
                />
                {
                    errors.password && (
                        <Text className="text-error-500 text-sm font-semibold">{errors.password.message}</Text>
                    )
                }
            </Box>

            <Button size="lg" onPress={handleSubmit(onSubmit)}>
                <ButtonText className="text-typography-0">Login</ButtonText>
            </Button>
            <Link className=" w-full "  href={"/(auth)/register"} asChild>
                <LinkText className="text-right">Não tem conta? Clique aqui.</LinkText>
            </Link>
        </VStack>
    )
}

export default AuthFields