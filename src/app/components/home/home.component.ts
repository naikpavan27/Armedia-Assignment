import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  // Declare Variables
  featuredPosts: any;
  posts:string[] = [];

  // User image and User infowill change based on environment
  userImage = environment.userImage; 
  userInfo = environment.userInfo;

  // Injecting PostsService
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    // Get Stored Blog posts from localstorage API
    const blogPosts = localStorage.getItem("blog_posts");

    if (blogPosts) {
      // Convert localstorage's stringify json data to array of objects and store in the posts variable 
      this.posts = JSON.parse(blogPosts);
      this.featuredPosts = this.getFeaturedPost(this.posts);
    } else {
      // Fetch the blog's posts data
      this.postsService.getPostsJSON().subscribe(response => {
        // Convert the posts variable to stringify json and store in localstorage
        localStorage.setItem("blog_posts", JSON.stringify(response.posts));
        this.posts = response.posts;
        this.featuredPosts = this.getFeaturedPost(this.posts);
      });
    }
  }

  // To get only featured Post of blog posts
  getFeaturedPost(posts:any){
    return posts.filter(function(post:any) {
      return post.isfeaturedPost;
    });
  }

}
