"use client"

import LikeButton from "@/components/LikeButton"
import { Product } from "@/types/types"
import { use, useEffect, useState } from "react"
import {Nunito, Zalando_Sans} from "next/font/google"
import SizeOptions from "@/components/SizeOptions"
import BottomSheet from "@/components/BottomSheet"

const nunito = Nunito({
    weight: ["400", "700"],
    display: 'swap'
})

const zalando = Zalando_Sans({
    weight: ["400", "700"],
    display: 'swap'
})

export default function Page({params} : {params: Promise<{id: string}>}){
    const [product, setProduct] = useState<Product>()
    const [size, setSize] = useState<string>("")
    const [openBottomSheet, setOpenBottomSheet] = useState<boolean>(false)

    const {id} = use(params)
    useEffect(() => {
        async function loadData(){
            const request = await fetch(`/api/product?id=${id}`)
            const result = await request.json()
            setProduct(result)
        }

        loadData()
    }, [])

    if(!product){
        return (
            <div className="absolute bottom-0 left-0 right-0 top-0 flex justify-center items-center">
                Loading
            </div>
        )
    }
    return (
        <div>
            <div className="flex flex-col">
                <div className="h-130 bg-black overflow-hidden min-w-full"> 
                    <img src={product.image} className="object-cover min-h-full min-w-full"/>
                </div>
                <div className={`flex flex-col p-5 gap-3 ${zalando.className}`}>
                    <div className="flex justify-between items-center">
                        <p className="text-4xl text-emerald-500 font-bold"><span className="text-lg">Rp </span>{parseInt(product.price).toLocaleString()}</p>
                        <LikeButton/>
                    </div>
                    <p className={`text-2xl text-black font-semibold`}>{product.name}</p>
                    <p className="text-black/50 -mt-3">{product.category}</p>
                    <p className="text-black/80 text-lg">{product.description}</p>
                    <div className="mt-5 flex text-black items-center gap-3">
                        <p>Size:</p>
                        <SizeOptions sizes={product.sizes} selected={size} selectSize={setSize}/>
                    </div>
                    <button className="bg-black w-full h-15 rounded-lg flex justify-center items-center text-white active:bg-black/90" onClick={() => setOpenBottomSheet(true)}>+ Add to cart</button>
                </div>
            </div>
            <BottomSheet onClose={setOpenBottomSheet} isOpen={openBottomSheet} data={{...product, size, setSize}}/>
        </div>
    )
}