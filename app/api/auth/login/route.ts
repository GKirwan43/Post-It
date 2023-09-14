import User from "@/models/user";
import Session from "@/models/session";
import { connectToDB } from "@/utils/database";
import { v4 as uuidv4 } from "uuid";

import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

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
            const sessionToken = uuidv4();
            const expiresAt = new Date().setFullYear(new Date().getFullYear() + 1);

            await Session.create({
                user_id: user._id,
                session_token: sessionToken,
                expires_at: expiresAt,
            })

            cookies().set("session_token", sessionToken, { maxAge: expiresAt })

            return NextResponse.json("Login Successful", { status: 201 });
        } else {
            let errors = [
                errorModel("username", ""),
                errorModel("password", "Username or password is incorrect."),
            ]

            return NextResponse.json({ errors });
        }
    } catch (error) {
        return NextResponse.json("Error loggining in", { status: 500 })
    }
}