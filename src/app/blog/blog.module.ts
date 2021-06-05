import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreatorComponent } from './post-creator/post-creator.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { RouterModule } from '@angular/router';
import { PostService } from './post.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PostCreatorComponent,
    PostDetailsComponent,
    PostsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PostService]
})
export class BlogModule { }
