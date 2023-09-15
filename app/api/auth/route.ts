import Session from '@/models/session';

import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { connectToDB, deleteSession, getSession } from '@/utils/database';

export async function GET() {
    try {
        const session_token = cookies().get('session_token');

        if (!session_token) {
            return NextResponse.json("Invalid session token.", { status: 401 })
        }

        await connectToDB();

        const session = await getSession(session_token);

        if (!session) {
            return NextResponse.json("Invalid session token.", { status: 401 })
        }

        return NextResponse.json("Session is valid.", { status: 202 });
    } catch (error) {
        console.log(error)
        return NextResponse.json("Could not authenticate.", { status: 500 })
    }
}

export async function POST() {
    try {
        const session_token = cookies().get('session_token');

        if (!session_token) {
            return NextResponse.json("Invalid session token.", { status: 401 })
        }

        await connectToDB();

        const session = await getSession(session_token);

        if (!session) {
            return NextResponse.json("Invalid session token.", { status: 401 })
        }

        cookies().delete('session_token');
        await deleteSession();

        return NextResponse.json("Session logged out.", { status: 202 });
    } catch (error) {
        console.log(error)
        return NextResponse.json("Could not log out.", { status: 500 })
    }
}