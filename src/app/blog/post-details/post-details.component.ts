import { Component } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html'
})
export class PostDetailsComponent {

  post$ = this.route.params.pipe(
    map(params => params.id),
    switchMap(id => this.postService.getPostById(Number(id))),
    catchError(() => of(this.router.navigate(['/not-found']))
      .pipe(
        map(() => null)
      )
    )
  );

  constructor(private route: ActivatedRoute,
    private postService: PostService,
    private router: Router) { }

}
