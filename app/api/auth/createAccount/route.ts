import User from '@/models/user';

import { connectToDB, createSession } from '@/utils/database';
import { NextRequest, NextResponse } from 'next/server';

function errorModel(field: string, message: string) {
    return {
        field: field,
        message: message,
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
    
    try {
        await connectToDB();

        if (await User.findOne({ username })) {
            errors.push(errorModel("username", "Username already exits."));
        }

        if (await User.findOne({ email })) {
            errors.push(errorModel("email", "Email already is being used."));
        }

        if (errors.length > 0) {
            return NextResponse.json({ errors });
        }

        const user = await User.create({
            username,
            email,
            password,
        });

        await createSession(user);

        return NextResponse.json("Account was created", { status: 201 });
    } catch (error: any) {
        console.log(error)

        return NextResponse.json("Error creating account", { status: 500 })
    }
}