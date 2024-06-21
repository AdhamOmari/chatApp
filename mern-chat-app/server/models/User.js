import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email: {
        type: String,
        // required: [true, "Please provide an email"],
        unique: true,
    },
    password: {
        type: String,
        // required: [true, "Please provide a password"],
    },
    phone: {
        type: Number,
        // required: [true, "Please provide a Phone Number"],
    },
    online: {
        type: Boolean,
        default: false,
    },
    note: {
        type: String,
        default: null,
    },
    rate: {
        type: String,
        default: 0,
    },
    preprojects: {
        type: [String],
        default: [],
    },
    payment: {
        type: Number,
        default: 0,
    },
    certification: {
        type: String,
        default: null,
    },
    Image: {
        type: String,
        default: null,
    },
    ProgrammerPath: {
        type: String,
        default: null,
    },
}, { timestamps: true });

const User = mongoose.models.users || mongoose.model("users", UserSchema);

export default User;
