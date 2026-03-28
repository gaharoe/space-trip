import { NextRequest, NextResponse } from "next/server";

function isMobile(userAgent: string){
    return /Mobi|Android|iPhone/i.test(userAgent)
}

export function proxy(request: NextRequest){
    const ua = request.headers.get("user-agent") || ""
    if(request.nextUrl.pathname.startsWith("/maintenance")){
        return NextResponse.next()
    }

    if(!isMobile(ua)) {
        return NextResponse.rewrite(
            new URL("/maintenance/device", request.url)
        )
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/((?!api|_next|favicon.ico).*)"]
}