import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const cartData = await req.json()
    console.log(cartData)

    return NextResponse.json({success: true, msg: "Item added to cart"})
}