import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/lib/prisma";
import * as yup from 'yup';

export async function GET(req: NextRequest) {

    const { searchParams } = new URL(req.url);
    const take = +(searchParams.get('take') ?? '10'); //conversion a numero con +
    const skip = +(searchParams.get('skip') ?? '0');


    //verifico que el parametro take sea un número
    if (isNaN(take)) {
        return NextResponse.json({
            message: "take debe ser un número"
        }, {
            status: 400
        });
    }
     //verifico que el parametro skip sea un número
     if (isNaN(skip)) {
        return NextResponse.json({
            message: "skip debe ser un número"
        }, {
            status: 400
        });
    }

    const todos = await prisma.todo.findMany({
        take,
        skip,
        orderBy: {
            id: 'desc'
        }
    });

    console.log("todos : ");
    console.log(todos);

    return NextResponse.json(todos);
}

//YUP

const postSchema = yup.object({
    description: yup.string().required(),
    complete: yup.boolean().optional().default(false), 
})

export async function POST(request: Request) { 
    try {
        const body = await postSchema.validate(await request.json());

        const todo = await prisma.todo.create({
            data: body
        });

        return NextResponse.json(todo);
    }catch (error) {
        return NextResponse.json(error, {
            status: 400
        });
    }
}

