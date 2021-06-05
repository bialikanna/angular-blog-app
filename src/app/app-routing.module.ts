import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './blog/posts-list/posts-list.component';
import { PostCreatorComponent } from './blog/post-creator/post-creator.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostDetailsComponent } from './blog/post-details/post-details.component';

const routes: Routes = [
  {
    path: '',
    component: PostsListComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent
  },
  {
    path: 'add-post',
    component: PostCreatorComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
