import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        unique: [true, "Username already exists."],
        minLength: [5, "Username can not be less than 5 characters."],
        maxLength: [16, "Username can not be longer than 16 characters."],
        required: true,
    },
    email: {
        type: String,
        minLength: [1, "Email can not be blank."],
        match: [/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/, "Email must be in form email@example.com."],
        required: true,
    },
    password: {
        type: String,
        minLength: [5, "Password can not be less than 5 characters."],
        maxLength: [16, "Password can not be longer than 16 character."],
        required: true,
    },
});

const Post = models.User || model("User", UserSchema);

export default Post;