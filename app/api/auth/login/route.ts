import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

function errorModel(id: string, text: string) {
    return {
        id: id,
        text: text,
    }
}

const accounts = [
    {
        id: 0,
        username: "testUser",
        password: "test",
    }, {
        id: 0,
        username: "testUser1",
        password: "test",
    }
  ];
 
export async function POST(request: NextRequest) {
    const body = await request.json();
    const username = body.username;
    const password = body.password;

    const account = accounts.find(item => item.username === username);

    let errors = [];

    if (!account || account.password != password) {
        errors.push(errorModel("password", "Username or password is incorrect."));
    }

    if (errors.length > 0) {
        return NextResponse.json(errors, { status: 400 });
    }

    console.log(account);

    return NextResponse.json({ accounts });
}