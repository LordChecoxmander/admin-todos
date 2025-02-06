import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
    //borro todos los datos
    await prisma.todo.deleteMany();

    //cargo datos
    await prisma.todo.createMany({
        data: [
            {
                description: "descripcion 1",
                complete: true
            },
            {
                description: "descripcion 2",
                complete: false
            },
            {
                description: "descripcion 3",
                complete: true
            }, 
            {
                description: "descripcion 4",
                complete: false
            }
        ]
    });

    return NextResponse.json({
        message: "hola desde el seed" 
    });
}