import { Product } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs"

export async function GET(request: NextRequest){
    const {searchParams} = new URL(request.url)
    const id = searchParams.get("id")

    const res = JSON.parse(fs.readFileSync(`${process.cwd()}/public/products.json`, "utf-8"))

    if(id){
        const newRes = res.flatMap((prod: any) => 
            prod.product.map((item: any) => ({...item, category: prod.category}))
        )
        const singleProduct = newRes.find((item: Product) => item.id.toString() == id)
        console.log(singleProduct)
        return NextResponse.json(singleProduct)
    } else {
        return NextResponse.json(res)
    }

    
}