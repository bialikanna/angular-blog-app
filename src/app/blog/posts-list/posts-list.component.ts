import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { Post } from '../post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html'
})
export class PostsListComponent {

  posts$: Observable<Post[]>;

  constructor(private postService: PostService) {
    this.posts$ = this.postService.fetchPosts();
  }

  removePost(id: number) {
    this.postService.removePost(id).subscribe(() => this.posts$ = this.postService.fetchPosts());
  }
}
