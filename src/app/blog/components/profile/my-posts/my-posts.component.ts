import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../core/service/post.service';
import { ProfileService } from '../../../../core/service/profile.service';
import { Post } from '../../../../core/model/post.model';
import { Page } from '../../../../core/model/page.model';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService, private profileService: ProfileService) { }

  ngOnInit() {
    this.postService.getAllPostsByProfileId(this.profileService.getProfileIdFromLocalStorage(), 0, 10000)
      .subscribe((postsPage: Page<Post>) => {
        this.posts = postsPage.items;
      });
  }

}
