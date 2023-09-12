import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

function errorModel(id: string, text: string) {
    return {
        id: id,
        text: text,
    }
}
 
export async function POST(request: NextRequest) {
    const body = await request.json();
    const username = body.username;
    const email = body.email;
    const password = body.password;
    const confirmPassword = body.confirmPassword;

    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    let errors = [];

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
        errors.push(errorModel("confirmPassword", "Password can not be blank."));
    }

    if (errors.length > 0) {
        return NextResponse.json(errors, { status: 400 });
    }

    return NextResponse.json("Account was created", { status: 201 });
}