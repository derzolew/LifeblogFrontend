import { Injectable } from '@angular/core';
import { ApiService, AuthorizationType } from './api.service';
import { Post } from '../model/post.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BlogService {

  constructor(private apiService: ApiService) { }

  public makePost(post: Post): Observable<Post> {
    return this.apiService.post('/post', AuthorizationType.BEARER, post, null);
  }
}
