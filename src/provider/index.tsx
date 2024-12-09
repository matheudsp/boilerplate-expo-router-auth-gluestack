import { GluestackUIProvider } from "@/gluestack/ui/gluestack-ui-provider";
import { ReactNode } from "react";
import { SessionProvider } from "../contexts/Authentication";


export default function Providers({ children }: { children: ReactNode }) {

    return (

        <SessionProvider>
            <GluestackUIProvider mode="light">
                {children}
            </GluestackUIProvider>
        </SessionProvider>
    )
}