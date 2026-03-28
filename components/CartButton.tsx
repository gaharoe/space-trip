"use client"
import { useAuth } from "@/hooks/useAuth"
import { ShoppingBag } from "lucide-react"
import { useState } from "react"
import SignButton from "./SignButton"

export default function CartButton(){

    return (
        <button type="button" className="w-12 h-12 bg-gray-100 rounded-full transition-all active:bg-gray-200 flex justify-center items-center">
            <ShoppingBag/>
        </button>
    )
}