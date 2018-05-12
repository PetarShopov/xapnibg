import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { FeedService } from '../feed.service';
import { PostModel } from '../../models/post.model';

@Component({
    selector: 'all-posts',
    templateUrl: './all-posts.component.html',
    styleUrls: ['./all-posts.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AllPostsComponent implements OnInit {
    page: number = 1;
    posts: Array<object> = [];
    isLoading = false;
    model = new PostModel(null, '', 0, [], '');
    message: string = '';

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private feedService: FeedService
    ) { }

    onSubmit() {
        this.feedService.addPost(this.model)
            .subscribe(result => {
                this.getPosts(this.page);
                this.model.content = '';
            });;
    }

    ngOnInit() {
        this.route
            .queryParams
            .subscribe(params => {
                this.page = +params['page'] || 1;
                this.getPosts(this.page);
            })

    }

    onComment(postData: object) {
        this.feedService.addComment(postData).subscribe(data => {
            this.message = 'Post commented!';
            setTimeout(() => {
                this.message = ''
            }, 2000);
        })
    }

    onLike(postData: object) {
        this.feedService.addLike(postData).subscribe(data => {
            this.message = 'Post liked!';
            setTimeout(() => {
                this.message = ''
            }, 2000);
            this.getPosts(this.page);
        })
    }

    onDelete(postData: object) {
        this.feedService.deletePost(postData).subscribe(data => {
            this.message = 'Post deleted!';
            setTimeout(() => {
                this.message = ''
            }, 2000);
            this.getPosts(this.page);
        })
    }

    getPosts(page) {
        this.isLoading = true;
        this.feedService.getPosts(page).subscribe(data => {
            this.posts = data.posts;
            this.isLoading = false;
        })
    }

    prevPage() {
        if (this.page === 1) {
            return;
        }
        this.page = this.page - 1
        this.getPosts(this.page);
    }

    nextPage() {
        if (this.posts.length === 0 || this.posts.length < 6) {
            return;
        }
        this.page = this.page + 1
        this.getPosts(this.page);
    }

    private getUrl(page) {
        let url = `posts/all?page=${page}`;
        return url;
    }
}
