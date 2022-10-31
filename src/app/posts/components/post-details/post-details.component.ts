import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  // Declare global variavles
  post:any;
  posts:string[] = [];

  constructor() { }

  ngOnInit(): void {
    // To get stored post details's stringify json data from localstorage
    const post_details = localStorage.getItem("post_details");

    // Convert localstorage's stringify json data to json object and store in the post variable
    if (post_details) { 
      this.post = JSON.parse(post_details);
    }
  }

  // Add selected blog post to featured blog posts
  addPostToFeaturedPosts(post:any){
   
    // Convert localstorage's stringify json data to array of objects and store in the posts variable 
    const blogPosts = localStorage.getItem("blog_posts");
    if (blogPosts) {
      this.posts = JSON.parse(blogPosts);
    }

     // Change Post's isfeaturedPost status to true, if selected Blog's post id is matched with Blog's posts data 
     this.posts.forEach((item:any) => {
        if(post.id === item.id){
          // Change matched blog post's isfeaturedPost status to true
          item.isfeaturedPost = true;
          // Change selected blog post's isfeaturedPost status to false
          this.post.isfeaturedPost = true;
        }
      });

    // Convert the posts variable to stringify json and store in localstorage
    localStorage.setItem("blog_posts", JSON.stringify(this.posts));

    // Prompt added Featured Blog post
    alert("Blog post has been Added to Featured Blog posts");
  }

}
