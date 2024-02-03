import { User } from "./user.model";
import mongoose from 'mongoose';

export class Message {
    text: string | undefined;
    user: User | undefined;
}