import mongoose from "mongoose";

import User from "@/models/user"

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