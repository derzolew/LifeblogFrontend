import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../core/model/post.model';
import { AssetService } from '../../../core/service/asset.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;
  avatarUrl: string;

  constructor(private assetService: AssetService) {
  }

  ngOnInit() {
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
}
