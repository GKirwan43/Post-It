import Post from '@/models/post';

import { NextRequest, NextResponse } from 'next/server';
import { connectToDB } from '@/utils/database';

export async function POST(request: NextRequest) {
    const { title, post } = await request.json();

    try {
        await connectToDB();

        await Post.create({ date: new Date(), title, post });

        return NextResponse.json("Post was created", { status: 201 });
    } catch (error) {
        return NextResponse.json("Could not connect to database.", { status: 500 });
    }
}