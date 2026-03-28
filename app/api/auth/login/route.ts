import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    const user_data = await request.json()
    console.log(user_data)
    return NextResponse.json({success: false})
}