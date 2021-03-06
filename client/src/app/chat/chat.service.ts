import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

export class ChatService {
    private url = 'http://localhost:1337';
    // private url = 'https://xapnibg-server.herokuapp.com/'
    private socket;    

    constructor() {
        this.socket = io(this.url);
    }

    public sendMessage(message) {
        if (!message.content) {
            message.content = '';
        }
        this.socket.emit('new-message', message);
    }

    public getMessages = () => {
        return Observable.create((observer) => {
            this.socket.on('new-message', (message) => {
                observer.next(message);
            });
        });
    }
}