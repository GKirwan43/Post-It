import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const posts = [
    {
      id: 0,
      username: "testUser",
      date: "9/9/2023",
      title: "Post 1",
      post: "This is an example for post 1.",
    },
    {
      id: 1,
      username: "testUser",
      date: "9/9/2023",
      title: "Post 2",
      post: "This is an example for post 2.",
    },
    {
      id: 2,
      username: "testUser",
      date: "9/9/2023",
      title: "Post 3",
      post: "This is an example for post 3.",
    },
  ];
 
export async function GET(request: NextRequest) {
  return NextResponse.json({ posts });
}