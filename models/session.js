import { Schema, model, models } from "mongoose";

const SessionSchema = new Schema({
    user_id: {
        type: String,
        required: true,
    },
    session_token: {
        type: String,
        required: true,
    },
    expires_at: {
        type: Date,
        required: true,
    },
});

const Session = models.Session || model("Session", SessionSchema);

export default Session;