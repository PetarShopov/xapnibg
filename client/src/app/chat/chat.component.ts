import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ChatService } from './chat.service';
import { AuthService } from '../core/auth.service';
import {distinctUntilChanged, filter, skipWhile, throttleTime, takeWhile} from 'rxjs/operators';

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
    message: string;
    messageWithAuthor: object;
    messages: object[] = [];
    secretCode: string;
    endConversationCode: string;
    currentUser: string = this.authService.getUser();

    constructor(
        private chatService: ChatService,
        private authService: AuthService
    ) { 
        this.secretCode = 'START';
        this.endConversationCode = 'END';
    }

    ngOnInit() {
        this.chatService
            .getMessages()
            .pipe(
                distinctUntilChanged(),
                filter((message) => {
                   return message['content'].trim().length > 0
                }),
                throttleTime(1000),
                takeWhile((message) => message['content'] !== this.endConversationCode),
                skipWhile((message) => message['content'] !== this.secretCode)
            )
            .subscribe((message: object) => {
                let currentTime = moment().format('hh:mm:ss a');
                let messageWithTimestamp = {};
                messageWithTimestamp['author'] = message['author'];
                messageWithTimestamp['message'] = message['content'];
                messageWithTimestamp['currentTime'] = currentTime;
                this.messages.push(messageWithTimestamp);
            });
    }

    sendMessage() {
        this.messageWithAuthor = {'content': this.message, author: this.authService.getUser()}
        this.chatService.sendMessage(this.messageWithAuthor);
        this.message = '';
    }
}
