"use client"
import { Heart } from "lucide-react";
import { useState } from "react";

export default function LikeButton({id} : {id?: string}){
    const [isClick, setIsClick] = useState<boolean>(false)

    return (
        <button onClick={() => setIsClick(prev => !prev)} className={`transition-all w-10 h-10 rounded-full flex justify-center items-center ${isClick ? "text-rose-600 bg-gray-200" : "text-white bg-rose-200"}`}>
            <Heart className={isClick? "fill-rose-600" : "fill-white"}/>
        </button>
    )
}