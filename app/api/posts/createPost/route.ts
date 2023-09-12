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
    const title = body.title;
    const post = body.post;

    let errors = [];

    if (title == "") {
        errors.push(errorModel("title", "Title can not be blank."));
    }
    
    if (title.length > 60) {
        errors.push(errorModel("title", "Title can not be longer than 60 characters."));
    }

    if (post == "") {
        errors.push(errorModel("post", "Post can not be blank."));
    }

    if (post.length > 320) {
        errors.push(errorModel("post", "Post can not be longer than 320 character."));
    }

    if (errors.length > 0) {
        return NextResponse.json(errors, { status: 400 });
    }

    return NextResponse.json("Post was created", { status: 201 });
}