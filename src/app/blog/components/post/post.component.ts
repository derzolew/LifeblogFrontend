import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../core/model/post.model';
import { AssetService } from '../../../core/service/asset.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../../core/service/blog.service';
import { PostService } from '../../../core/service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;
  avatarUrl: string;
  postId: number;

  constructor(private assetService: AssetService,
              private postService: PostService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params && params['id']) {
        this.postId = params['id'];
        this.getPostById();
      } else if (this.post && this.post.id) {
        this.postId = this.post.id;
      }
    });
  }

  getPostById() {
    this.postService.getPostById(this.postId).subscribe((post: Post) => {
      this.post = post;
    });
  }

  onLike() {
    this.postService.likePost(this.post.id).subscribe((response: Post) => {
      this.getPostById();
    });
  }

  getAvatarImageUrl() {
    if (this.post && this.post.profileDto && this.post.profileDto.photoName) {
      return this.assetService.getImageUrl(this.post.profileDto.photoName);
    }
    return null;
  }

  getPostImageUrl() {
    if (this.post && this.post.photoName) {
      return this.assetService.getImageUrl(this.post.photoName);
    }
    return null;
  }

  onPostClick() {
    this.router.navigate(['post', this.post.id]);
  }
}
