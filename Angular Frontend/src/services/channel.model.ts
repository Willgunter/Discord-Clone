import { Message } from "./message.model";

export class Channel {
    // _id: string | undefined;
    name: string | undefined;
    messages: Message[] | undefined;
}