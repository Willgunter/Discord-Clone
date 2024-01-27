import { Message } from "./message.model";
import mongoose from 'mongoose';

export class Channel {
    _id: mongoose.Types.ObjectId | undefined;
    name: string | undefined;
    messages: Message[] | undefined;
}