import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../core/model/post.model';
import { FormControl, Validators } from '@angular/forms';
import { PostService } from '../../../../core/service/post.service';
import { AssetService } from '../../../../core/service/asset.service';
import { Asset } from '../../../../core/model/asset.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-post',
  templateUrl: './make-post.component.html',
  styleUrls: ['./make-post.component.css']
})
export class MakePostComponent implements OnInit {

  post: Post = new Post();
  isLoading = false;
  title = new FormControl('', [Validators.required]);
  postBody = new FormControl('', [Validators.required]);

  constructor(private postService: PostService,
              private router: Router,
              private assetService: AssetService) { }

  getErrorMessage() {

  }

  ngOnInit() {
  }

  onMakePost() {
    this.post.date = new Date();
    this.postService.makePost(this.post).subscribe((post: Post) => {
      this.router.navigate(['profile', 'my-posts']);
    });
  }


  getImageUrl() {
    if (this.post.photoName) {
      return this.assetService.getImageUrl(this.post.photoName);
    }
    return null;
  }

  onPhotoUpload(event) {
    if (event.target.files && event.target.files[0]) {
      const photo = event.target.files[0];
      this.assetService.uploadImage(photo).subscribe((asset: Asset) => {
        if (asset) {
          this.post.photoName = asset.fileName;
          this.post.photoUrl = asset.url;
        }
      });
    }
  }

}
