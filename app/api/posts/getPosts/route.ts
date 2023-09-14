import User from "@/models/user";
import Post from "@/models/post";

import { NextRequest, NextResponse } from 'next/server';
import { connectToDB } from '@/utils/database';

export async function GET(request: NextRequest) {
  try {
    await connectToDB();

    let posts = await Post.find().sort({ date: -1 });

    const getUsername = await posts.map(async (post) => {
      const postWithUsername = { ...post.toObject() };
      postWithUsername.username = (await User.findOne({ _id: post.toObject().userId })).username;
      return postWithUsername;
    });

    posts = await Promise.all(getUsername);

    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json("Could not connect to database.", {status: 500 });
  }
}