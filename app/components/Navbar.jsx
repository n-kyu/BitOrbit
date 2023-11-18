import Image from "next/image";
import Link from "next/link";
import saturn from "/public/saturn.svg";

export default function Navbar() {
    return (
        <>
            <div className="flex p-2 items-center justify-between fixed top-0 left-0 right-0 z-50 bg-white transition">
                <div className="px-5">
                    <Link href="#" scroll={false}>
                        <Image
                            priority={true}
                            src={saturn}
                            alt="Logo from BitOrbit"
                            height={40}
                            width={40}
                        />
                    </Link>
                </div>
                <div className="flex gap-4 mr-4 items-center">
                    <Link href="#">Buy Crypto</Link>
                    <Link href="#">Markets</Link>
                    <Link href="#">Trade</Link>
                    <Link href="#">Earn</Link>
                    <Link
                        className="py-[5px] px-[10px] text-sm text-[--teal] rounded-md bg-[--aqua-20] font-medium"
                        href="#"
                    >
                        Rewards Hub
                    </Link>
                </div>

                <div className="flex pr-5 gap-4 items-center">
                    <button className="font-semibold">Log In</button>
                    <button className="singup-btn">Sing Up</button>
                </div>
            </div>
        </>
    );
}
