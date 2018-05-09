import { Injectable } from '@angular/core';
import { ApiService, AuthorizationType } from './api.service';
import { Post } from '../model/post.model';
import { Observable } from 'rxjs/Observable';
import { Page } from '../model/page.model';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class PostService {

  constructor(private apiService: ApiService) {}

  public makePost(post: Post): Observable<Post> {
    return this.apiService.post('post', AuthorizationType.BEARER, post);
  }

  public getAllPosts(page: number, size: number): Observable<Page<Post>> {
    const query = new HttpParams()
      .append('page', page.toString())
      .append('size', size.toString());
    return this.apiService.get('post/all', AuthorizationType.NONE, query);
  }

  public getAllPostsByProfileId(profileId: number, page: number, size: number): Observable<Page<Post>> {
    const query = new HttpParams()
      .append('page', page.toString())
      .append('size', size.toString());
    return this.apiService.get(`post/all/${profileId}`, AuthorizationType.NONE, query);
  }

  public getPostById(postId: number): Observable<Post> {
    return this.apiService.get(`post/${postId}`, AuthorizationType.NONE);
  }

  public likePost(postId: number): Observable<Post> {
    return this.apiService.put(`post/${postId}`, AuthorizationType.BEARER);
  }
}
