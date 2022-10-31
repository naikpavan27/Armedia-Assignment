import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { RouterModule, Routes } from '@angular/router';
import { PostsRoutingModule } from '../posts/posts-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  exports: [
    HeaderComponent,
    PostCardComponent,
    RouterModule,
  ]
  
})
export class SharedModule { }
