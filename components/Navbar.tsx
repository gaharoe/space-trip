import { Home, Info, Phone, Shirt } from "lucide-react";
import Link from "next/link";
import SignButton from "./SignButton";

export default function Navbar({isOpen, slideTrigger} : {isOpen: boolean, slideTrigger: (data: boolean) => void}){

    return (
        <nav className={`flex flex-col gap-3 p-3 fixed top-0 pt-20 h-svh md:static md:ml-0 md:h-20 md:flex-row md:w-auto md:gap-10 md:shadow-none md:items-center  left-0 w-60 bg-white shadow-lg duration-300 z-50 transition-all ${isOpen ? "ml-0" : "-ml-60"}`}>
            <div className="py-3 lg:hidden">
                <SignButton/>
            </div>
            <div className="flex gap-2 items-center">
                <Home width={16}/>
                <Link onClick={() => slideTrigger(false)} href={"/"}>Beranda</Link>
            </div>
            <div className="flex gap-2 items-center">
                <Shirt width={16}/>
                <Link onClick={() => slideTrigger(false)} href={"/product"}>Produk</Link>
            </div>
            <div className="flex gap-2 items-center">
                <Phone width={16}/>
                <Link onClick={() => slideTrigger(false)} href={"/contact"}>Kontak</Link>
            </div>
            <div className="flex gap-2 items-center">
                <Info width={16}/>
                <Link onClick={() => slideTrigger(false)} href={"/about"}>Tentang Kami</Link>
            </div>
        </nav>
    )
}