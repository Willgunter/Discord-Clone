import { User } from "./user.model";
import mongoose from 'mongoose';

export class Message {
    _id: mongoose.Types.ObjectId | undefined;
    text: string | undefined;
    user: User | undefined;
}