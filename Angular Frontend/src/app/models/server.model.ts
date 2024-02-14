import { Channel } from './channel.model';
import { User } from './user.model';

export class Server {
    // _id: string | undefined;
    name: string;
    channels: Channel[] | undefined;
}