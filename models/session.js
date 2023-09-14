import { Schema, model, models } from "mongoose";
import { ClassificationType } from "typescript";

const SessionSchema = new Schema({
    user_id: {
        type: Map,
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