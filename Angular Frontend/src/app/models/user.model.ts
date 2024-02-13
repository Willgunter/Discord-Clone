import mongoose from 'mongoose';

export class User {
    _id: mongoose.Types.ObjectId | undefined;
    name: string | undefined;
    email: string | undefined;
    username: string | undefined;
    password: string | undefined;
    color: string;
}