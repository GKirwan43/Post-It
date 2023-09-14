import Session from '@/models/session';

import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { connectToDB } from '@/utils/database';

export async function GET() {
    try {
        const session_token = cookies().get('session_token');

        if (!session_token) {
            return NextResponse.json("Invalid session token", { status: 401 })
        }

        await connectToDB();

        const user_id = (await Session.findOne({ session_token })).user_id;

        return NextResponse.json({ user_id }, { status: 202 });
    } catch (error) {
        return NextResponse.json("Could not authenticate", { status: 500 })
    }
}