import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../core/model/post.model';

@Component({
  selector: 'app-posts-all',
  templateUrl: './posts-all.component.html',
  styleUrls: ['./posts-all.component.css']
})
export class PostsAllComponent implements OnInit {

  @Input()
  posts: Post[];

  constructor() { }

  ngOnInit() {
  }

}
