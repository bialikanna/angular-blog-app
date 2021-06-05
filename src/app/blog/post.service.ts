import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {

    private url = "http://localhost:3000/posts";

    constructor(private http: HttpClient) { }

    fetchPosts() {
        return this.http.get<Post[]>(this.url);
    }

    addPost(post: Post): Observable<Post> {
        return this.http.post<Post>(this.url, post)
    }

    removePost(idToRemove: number) {
        return this.http.delete<Post>(`${this.url}/${idToRemove}`);
    }

    getPostById(postId: number): Observable<Post> {
        return this.http.get<Post>(`${this.url}/${postId}`)
    }
}
