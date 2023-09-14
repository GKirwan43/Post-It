import Post from "@/models/post";

import { NextRequest, NextResponse } from 'next/server';
import { connectToDB, getUsername } from '@/utils/database';

export async function GET() {
  try {
    await connectToDB();

    let posts = await Post.find().sort({ date: -1 });

    const postsWithUsername = await posts.map(async (post) => {
      const postWithUsername = { ...post.toObject() };
      postWithUsername.username = await getUsername(post.toObject().user_id);
      return postWithUsername;
    });

    posts = await Promise.all(postsWithUsername);

    return NextResponse.json({ posts });
  } catch (error) {
    console.log(error);

    return NextResponse.json("Could not connect to database.", {status: 500 });
  }
}