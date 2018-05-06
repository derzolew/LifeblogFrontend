import { Component, OnInit } from '@angular/core';
import { Post } from '../../core/model/post.model';
import { PostService } from '../../core/service/post.service';
import { Page } from '../../core/model/page.model';

@Component({
  selector: 'app-home-posts',
  templateUrl: './home-posts.component.html',
  styleUrls: ['./home-posts.component.css']
})
export class HomePostsComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts(0, 10000).subscribe((postPage: Page<Post>) => {
      if (postPage && postPage.items) {
        this.posts = postPage.items;
      }
    });
  }
}
