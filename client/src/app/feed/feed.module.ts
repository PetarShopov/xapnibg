import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AllPostsComponent } from './all-posts/all-posts.component';
import { FeedService } from './feed.service';
import { FeedRoutingModule } from './feed-routes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FeedRoutingModule
  ],
  declarations: [
    AllPostsComponent
  ],
  providers: [FeedService]
})
export class FeedModule { }