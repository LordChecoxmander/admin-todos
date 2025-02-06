import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import * as yup from 'yup';
import {Todo} from '@prisma/client';


interface Segments {
    params: {
        id: string;
    }
}

const getTodo = async(id:string):Promise<Todo | null> => {

    const todo = await prisma.todo.findFirst({
        where: {
            id: id
        }
    });

    return todo;
}

export async function GET(req: NextRequest, { params }: Segments) {
    
    const todo = await getTodo(params.id);

    if (!todo) {
        return NextResponse.json({
            message: "todo no encontrado"
        }, {
            status: 404
        });
    }


    return NextResponse.json(todo);
}

const putSchema = yup.object({
    complete: yup.boolean().optional(),
    description: yup.string().optional()
})

export async function PUT(req: NextRequest, { params }: Segments) {
    
    const todo = await getTodo(params.id);


    if (!todo) {
        return NextResponse.json({
            message: "todo no encontrado"
        }, {
            status: 404
        });
    }

    try{
        const { complete, description} = await putSchema.validate( await req.json());

        const updatedTodo = await prisma.todo.update({
            where: { id:params.id } ,
            data: { complete, description }
        });    
    
    
        return NextResponse.json(updatedTodo);
    }catch (error) {
        return NextResponse.json(error, {
            status: 400
        });
    }
}
