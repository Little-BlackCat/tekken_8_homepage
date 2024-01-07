import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/loggin-button";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
});

export default function Home() {

    return (
        <main className="flex h-full flex-col items-center justify-center bg-zinc-700">
            <div className="space-y-6 text-center">
                <h1
                className={cn(
                    "text-6xl font-semibold text-white drop-shadow-md",
                    font.className
                )}
                >
                🔐 Login
                </h1>
                <p className="text-lg text-white">A simple authentication service</p>
                <div>
                    <LoginButton>
                        <Button variant="secondary" size="lg">
                            Sign In
                        </Button>
                    </LoginButton>
                </div>
            </div>
        </main>
    );
}
