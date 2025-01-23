import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {

    return NextResponse.json({
        hola: "mundo" 
    });
}

export async function POST(req: NextRequest) {
    
    return NextResponse.json({
        hola: "mundo",
        mehtod: "post" 
    });
}