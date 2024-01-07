import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import tekken8mini from "../../public/tekken8-mini.png";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
      <div className="w-full flex flex-col gap-y-4 items-center justify-center">
        <div className="flex justify-center items-center space-x-4">
          <Image className="mini" src={tekken8mini} alt="Teken8 mini" width={70} height={70} />
          <h1 className={cn("text-3xl font-semibold", font.className)}>Tekken 8</h1>
        </div>
        <p className="text-muted-foreground text-sm">{label}</p>
      </div>
  );
};
