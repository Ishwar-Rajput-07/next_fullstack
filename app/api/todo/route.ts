import { connectDB } from "@/lib/mongo";
import Todo from "@/models/Todo";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        // console.log(await req.json());
        await connectDB()
        const todoData = await req.json()
        await Todo.create(todoData)
        return NextResponse.json({ message: "Todo create success" }, { status: 201 })

    } catch (error: any) {
        return NextResponse.json({ Message: error.message }, { status: 500 })
    }
}
export const GET = async (req: NextRequest) => {
    try {
        // console.log(await req.json());
        await connectDB()
        const result = await Todo.find()
        return NextResponse.json(
            {
                message: "Todo Fetch Success",
                result
            },
            { status: 200 })

    } catch (error: any) {
        return NextResponse.json({ Message: error.message }, { status: 500 })
    }
}
