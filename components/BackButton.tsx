"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BackButton(){
    const router = useRouter()
    return (
        <button onClick={() => router.back()} className="fixed top-20 left-6 w-12 h-12 flex justify-center items-center bg-gray-100 rounded-full text-black">
            <ArrowLeft/>
        </button>
    )
}