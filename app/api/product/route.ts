import { Product } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    const {searchParams} = new URL(request.url)
    const id = searchParams.get("id")

    const req = await fetch("http://192.168.43.161:3000/products.json")
    const res = await req.json()

    if(id){
        const newRes = res.flatMap((prod: any) => 
            prod.product.map((item: any) => ({...item, category: prod.category}))
        )
        const singleProduct = newRes.find((item: Product) => item.id.toString() == id)
        return NextResponse.json(singleProduct)
    } else {
        return NextResponse.json(res)
    }

    
}