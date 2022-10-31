import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCardComponent implements OnInit {

  // Decalre global variables
  @Input() posts:any;

  constructor(
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  // Navigate to post details component with selected blog's post data
  navitageToPostDetails(post:Object){
    this.router.navigateByUrl('/posts/post-details');
    // Convert the post variable to stringify json and store in localstorage
    localStorage.setItem("post_details", JSON.stringify(post));
  }

  // Add selected blog post to featured blog posts
  addPostToFeaturedPosts(post:any){
    // Change Post's isfeaturedPost status to true, if selected Blog's post id is matched with Blog's posts data 
    this.posts.forEach((item:any) => {
      if(post.id === item.id){
        // Change matched blog post's isfeaturedPost status to true
        item.isfeaturedPost = true;
      }
    });

    // Convert the posts variable to stringify json and store in localstorage
    localStorage.setItem("blog_posts", JSON.stringify(this.posts));

    // Convert localstorage's stringify json data to array of objects and store in the posts variable 
    const blogPosts = localStorage.getItem("blog_posts");
    if (blogPosts) {
      this.posts = JSON.parse(blogPosts);
    }
    
    // Prompt added Featured Blog post
    alert("Blog post has been Added to Featured Blog posts");
  }
}
