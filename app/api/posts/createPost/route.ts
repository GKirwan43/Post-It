import Post from '@/models/post';

import { NextRequest, NextResponse } from 'next/server';
import { connectToDB, getSession } from '@/utils/database';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
    const { title, post } = await request.json();
    const session_token = cookies().get('session_token');

    try {
        await connectToDB();

        const session = await getSession(session_token);

        await Post.create({ user_id: session.user_id, date: new Date(), title, post });

        return NextResponse.json("Post was created", { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json("Could not connect to database.", { status: 500 });
    }
}