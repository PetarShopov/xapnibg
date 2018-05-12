import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service'

import { Observable } from 'rxjs/Observable';
import { PostModel } from '../models/post.model';
import { AuthService } from '../core/auth.service';

@Injectable()
export class FeedService {
	constructor(
		private httpService: HttpService,
		private authService: AuthService
	) { }

	getPosts(page): any {
		var url = `posts/all?page=${page}`;
		return this.httpService.get(url);
	}

	addPost(post): any {
		post.author = this.authService.getUser();
		return this.httpService.post('posts/add', post, true);
	}

	addComment(postData): any {
		return this.httpService.post('posts/comment', postData, true);
	}

	addLike(postData): any {
		return this.httpService.post('posts/like', postData, true);
	}

	deletePost(postData): any {
		return this.httpService.post('posts/delete', postData, true);
	}
}