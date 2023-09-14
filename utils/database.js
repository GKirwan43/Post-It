import mongoose from "mongoose";
import User from "@/models/user"
import Session from '@/models/session';

import { v4 as uuidv4 } from "uuid";
import { cookies } from 'next/headers';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if (isConnected) {
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "post_it",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;

        console.log("MongoDB connected")
    } catch (error) {
        console.log(error);
    }
}

export const getUsername = async (id) => {
    const username = (await User.findOne({ _id: id })).username;

    return username;
}

export const createSession = async (user) => {
    const sessionToken = uuidv4();
    const expiresAt = new Date().setFullYear(new Date().getFullYear() + 1);

    await Session.create({
        user_id: user._id,
        session_token: sessionToken,
        expires_at: expiresAt,
    })

    cookies().set("session_token", sessionToken, { maxAge: expiresAt })
}

export const getSession = async (session_token) => {
    const session = await Session.findOne({ session_token: session_token.value });

    return session;
}