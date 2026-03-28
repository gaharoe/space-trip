"use client"

import { ListIndentIncrease, ListIndentDecrease, ShoppingBag } from "lucide-react"
import Navbar from "./Navbar"
import { useState } from "react"
import CartButton from "./CartButton"
import { useAuth } from "@/hooks/useAuth"

export default function Header(){
    const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false)

    return (
        <div className=" h-20 flex justify-between items-center px-6 fixed w-svw text-black">
            <button type="button" onClick={() => setSidebarIsOpen(prev => !prev)} className="md:hidden w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center z-60">
                {sidebarIsOpen ? (
                    <ListIndentDecrease/>
                ): (
                    <ListIndentIncrease/>
                )}
            </button>
            <Navbar isOpen={sidebarIsOpen} slideTrigger={setSidebarIsOpen}/>
            <div className="flex items-center gap-3">
                <CartButton/>
                <button type="button" className="w-12 h-12 bg-gray-100 rounded-full font-black flex justify-center items-center text-xl">G</button>
            </div>
        </div>
    )
}