import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivateRoute } from '../core/private-route';
import { AllPostsComponent } from './all-posts/all-posts.component';
 
const postRoutes: Routes = [
    { path: 'feed/all-posts', component: AllPostsComponent , canActivate: [PrivateRoute]},
];
 
@NgModule({
  imports: [
    RouterModule.forChild(postRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FeedRoutingModule { }