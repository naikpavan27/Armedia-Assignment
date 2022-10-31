import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  // Declare global variables
  posts: string[] = [];

  constructor() { }

  ngOnInit(): void {
    // To get stored Blog posts's stringify json data from localstorage API
    const blogPosts = localStorage.getItem("blog_posts");

    // Convert localstorage's stringify json data to array of objects and store in the posts variable
    if (blogPosts) { 
      this.posts = JSON.parse(blogPosts);
    }
  }

}
