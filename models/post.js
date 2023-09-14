import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
    user_id: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    title: {
        type: String,
        maxLength: [60, "Title can not be longer than 60 characters."],
        minLength: [1, "Title can not be blank."],
        required: true,
    },
    post: {
        type: String,
        maxLength: [320, "Post can not be longer than 320 characters."],
        minLength: [1, "Post can not be blank."],
        required: true,
    }
});

const Post = models.Post || model("Post", PostSchema);

export default Post;