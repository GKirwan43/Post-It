import User from "@/models/user";
import Session from "@/models/session";
import { connectToDB, createSession } from "@/utils/database";

import { NextRequest, NextResponse } from 'next/server';

function errorModel(id: string, text: string) {
    return {
        field: id,
        message: text,
    }
}

export async function POST(request: NextRequest) {
    const { username, password } = await request.json();

    try {
        await connectToDB();

        const user = await User.findOne({
            username,
            password,
        });

        if (user) {
            await createSession(user);

            return NextResponse.json("Login Successful", { status: 201 });
        } else {
            let errors = [
                errorModel("username", ""),
                errorModel("password", "Username or password is incorrect."),
            ]

            return NextResponse.json({ errors });
        }
    } catch (error) {
        console.log("Ran")

        return NextResponse.json("Error loggining in", { status: 500 })
    }
}