import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FeedService } from '../feed.service';
import { PostModel } from '../../models/post.model';

@Component({
    selector: 'post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent {
    @Input() post: PostModel;
    @Output() onComment = new EventEmitter<object>();
    @Output() onLike = new EventEmitter<object>();
    @Output() onDelete = new EventEmitter<object>();
    showComment: Boolean = false;
    comment: String;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private feedService: FeedService
    ) { }

    show() {
        this.showComment = !this.showComment;
    }

    addComment() {
        if (this.comment) {
            this.post.comments.push(this.comment.toString())
            let postData = {
                "_id": this.post['_id'],
                "comments": this.post.comments
            }
            this.onComment.emit(postData);
            this.showComment = false;
            this.comment = '';
        }
    }

    addLike() {
        let likes = this.post.likes + 1;
        let postData = {
            "_id": this.post['_id'],
            "likes": likes
        }
        this.onLike.emit(postData);
    }

    delete() {
        let postData = {
            "_id": this.post['_id']
        }
        this.onDelete.emit(postData);
    }
}
