import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AllPostsComponent } from './all-posts/all-posts.component';
import { PostComponent } from './post/post.component';
import { FeedService } from './feed.service';
import { FeedRoutingModule } from './feed-routes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FeedRoutingModule
  ],
  declarations: [
    AllPostsComponent,
    PostComponent
  ],
  providers: [FeedService]
})
export class FeedModule { }