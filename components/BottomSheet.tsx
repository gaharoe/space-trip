"use client"

import { Product } from "@/types/types"
import { LoaderCircle, Minus, Plus, SeparatorHorizontal, X } from "lucide-react"
import { Zalando_Sans } from "next/font/google"
import { useEffect, useState } from "react"
import SizeOptions from "./SizeOptions"
import LoaderCircleBar from "./LoaderCircleBar"

const zalando = Zalando_Sans({
    display: "swap"
})

export default function BottomSheet(
    {isOpen, onClose, data}
    :
    {isOpen:boolean, onClose: (data: boolean) => void, data?: Product & {size: string, setSize: (data: string) => void}}
){

    const [visible, setVisible] = useState<boolean>(false)
    const [qty, setQty] = useState<number>(1)
    const [buttonCartLoading, setButtonCartLoading] = useState<boolean>(false)

    useEffect(() => {
        if(isOpen) {
            setVisible(true)
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
    }, [isOpen])

    function closeSheet(){
        setVisible(false)
        setTimeout(() => {onClose(false)}, 300)
    }

    async function addCart(){
        if(!data?.size){
            alert("pilih ukuran terlebih dahulu")
            return
        }
        
        if(qty < 1){
            alert("tentukan jumlah product")
            return
        }
        setButtonCartLoading(true)
        const sendCartData = await fetch("/api/user/cart", {
            method: "POST",
            headers: {
                "Content-Type" : "application"
            },
            body: JSON.stringify({...data, qty})
        })
        const result = await sendCartData.json()
        
        setButtonCartLoading(false)
        if(result.success){
            closeSheet()
            alert(result.msg)
        } else {
            alert("gagal")
        }
        
    }


    if(!isOpen && !visible) {return null}

    return (
        <div className={`fixed top-0 bottom-0 left-0 right-0 transition-all duration-300 text-black ${zalando.className} ${visible ? "bg-black/30" : "bg-black/0"}`}
            onClick={() => closeSheet()}
            >
            <div className={`flex flex-col gap-4 p-5 h-100 rounded-t-3xl fixed z-40 bottom-0 right-0 left-0 transition-all duration-300 bg-white shadow-xl ${visible ? "mb-0" : "-mb-100"}`} onClick={(e) => {e.stopPropagation()}}>
                <button className="w-full flex justify-center opacity-55" onClick={() => {
                        setVisible(false) 
                        setTimeout(() => {onClose(false)}, 300)}
                    }
                ><SeparatorHorizontal/></button>
                {!data ? (
                    <div className="flex w-full h-full justify-center items-center">data tidak ada!</div>
                ) : (
                    <div className="flex flex-col gap-10">
                        <div className="flex gap-5">
                            <div className="w-30 h-30 rounded-xl overflow-hidden border border-black/10">
                                <img src={data.image} className="object-cover min-h-0 min-w-0"/>
                            </div>
                            <div className="flex flex-col justify-around">
                                <div className="flex flex-col">
                                    <p className="text-lg">{data.name}</p>
                                    <p className="text-sm text-black/50">{data.category}</p>
                                </div>
                                <p className="text-2xl font-bold"><span className="text-sm">Rp </span>{parseInt(data.price).toLocaleString()}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex w-full justify-center">
                                <SizeOptions sizes={data.sizes} selected={data.size} selectSize={data.setSize}/>
                            </div>
                            <div className="flex w-full justify-center items-center gap-5 text-white">
                                <button onClick={() => setQty(prev => prev > 0 ? prev-1 : prev)} className="w-7 h-7 rounded-full flex justify-center items-center bg-black"><Minus/></button>
                                <p className="font-bold text-black text-3xl">{qty}</p>
                                <button onClick={() => setQty(prev => prev+1)} className="w-7 h-7 rounded-full flex justify-center items-center bg-black"><Plus/></button>
                            </div>
                            <button onClick={() => addCart()} disabled={false} className="bg-black w-full h-15 rounded-lg flex justify-center items-center text-white active:bg-black/90 relative">
                                {buttonCartLoading ? (
                                    <LoaderCircleBar />
                                ) : (
                                    <p>+ Add to cart</p>
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}