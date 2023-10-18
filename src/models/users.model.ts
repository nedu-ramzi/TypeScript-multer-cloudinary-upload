import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    fullname: {
        require: true,
        type: String,
    },
    username: {
        require: true,
        type: String
    },
    email: {
        require: true,
        type: String
    },
    phone: {
        require: true,
        type: String
    },
    profileImage: {
        type: String
    }

}, { timestamps: true });

export const User = model('User', userSchema);