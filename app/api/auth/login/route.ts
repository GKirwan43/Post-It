import User from "@/models/user";
import { connectToDB } from "@/utils/database";

import { NextRequest, NextResponse } from 'next/server';

function errorModel(id: string, text: string) {
    return {
        id: id,
        text: text,
    }
}

export async function POST(request: NextRequest) {
    const { username, password }= await request.json();

    try {
        await connectToDB();

        const correctInfo = await User.findOne({
            username,
            password,
        });

        if (correctInfo) {
            return NextResponse.json("Login Successful", { status: 201 });
        } else {
            let errors = [
                errorModel("username", ""),
                errorModel("password", "Username or password is incorrect."),
            ]

            return NextResponse.json(errors, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json(error, { status: 500 })
    }
}