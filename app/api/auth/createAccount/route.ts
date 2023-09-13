import User from '@/models/user';

import { connectToDB } from '@/utils/database';
import { NextRequest, NextResponse } from 'next/server';

function errorModel(id: string, text: string) {
    return {
        id: id,
        text: text,
    }
}

export async function POST(request: NextRequest) {
    const { username, email, password, confirmPassword } = await request.json();

    const errors = [];
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    if (username.length < 5) {
        errors.push(errorModel("username", "Username can not be less than 5 characters."));
    }

    if (username.length > 16) {
        errors.push(errorModel("username", "Username can not be longer than 16 characters."));
    }

    if (email === "") {
        errors.push(errorModel("email", "Email can not be blank."));
    }

    if (!emailRegex.test(email)) {
        errors.push(errorModel("email", "Email must be in form email@example.com."));
    }

    if (password.length < 5) {
        errors.push(errorModel("password", "Password can not be less than 5 characters."));
    }

    if (password.length > 16) {
        errors.push(errorModel("password", "Password can not be longer than 16 character."));
    }

    if (confirmPassword !== password) {
        errors.push(errorModel("confirmPassword", "Passwords do not match."));
    }

    if (confirmPassword === "") {
        errors.push(errorModel("confirmPassword", "Password can not be less than 5 characters."));
    }

    if (errors.length > 0) {
        return NextResponse.json(errors, { status: 400 });
    }
    
    try {
        await connectToDB();

        await User.create({
            username,
            email,
            password,
        })

        return NextResponse.json("Account was created", { status: 201 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 })
    }
}