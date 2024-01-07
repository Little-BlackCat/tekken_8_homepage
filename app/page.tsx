import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/loggin-button";
import Image from "next/image";
import tekken8mini from "../public/tekken8-mini.png";
import CharactersCard from "@/components/CharactersCard";
import { getTekken8Characters } from "../actions/tekken8Api"

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default async function Home() {
  const tekken8Lists = await getTekken8Characters('')

  return (
    // <main className="flex h-full flex-col items-center justify-center bg-zinc-700">
    //   <div className="space-y-6 text-center">
    //     <div className="flex justify-center space-x-4 items-center">
    //       <Image src={tekken8mini} alt="Teken8 mini" width={100} height={100} />
    //       <h1
    //         className={cn(
    //           "text-6xl font-semibold text-white drop-shadow-md",
    //           font.className
    //         )}
    //       >
    //         Login
    //       </h1>
    //     </div>
    //     <p className="text-lg text-white">A simple authentication service</p>
    //     <div>
    //       <LoginButton>
    //         <Button variant="secondary" size="lg">
    //           Sign In
    //         </Button>
    //       </LoginButton>
    //     </div>
    //   </div>
    // </main>

    <main className='max-w-[1280px] mx-auto pb-[6rem]'>
      <CharactersCard tekken8Lists={tekken8Lists} />
    </main>
  );
}
