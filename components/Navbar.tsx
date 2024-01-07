
import bandner from "../public/tekken8_band.jpg"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";


const Navbar = async () => {

	return (
		<nav className="flex justify-between items-center sticky top-0 w-full mx-auto px-8 py-6 bg-gradient-to-b from-black from-80% via-slate-950 via-10%">
			<Link href="/">
				<Image
					src={`${bandner.src}`}
					width={750}
					height={200}
					alt="Bandner"
					style={{ width: "350px", height: "100px" }}
				/>
			</Link>
			<div className="sm:text-2xl">
				Welcome
			</div>
				<Link href="/api/auth/signout?callbackUrl=/">
					<button 
						className="text-rose-700 hover:text-white border hover:border-none rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-rose-900 duration-300 px-4 py-2 lg:px-8 lg:py-4 font-medium sm:text-2xl"
					>
						Log out
					</button>
				</Link>
		</nav>
	);
};

export default Navbar;
