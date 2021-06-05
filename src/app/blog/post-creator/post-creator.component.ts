import { Component, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-creator',
  templateUrl: './post-creator.component.html'
})
export class PostCreatorComponent {

  postForm = this.formBuilder.group({
    title: ['', Validators.required],
    text: ['', Validators.required],
  });

  constructor(private postService: PostService,
    private route: Router,
    private formBuilder: FormBuilder) { }

  addPost() {
    this.postService.addPost(this.postForm.getRawValue()).subscribe(() => this.route.navigate(['/']))
  }

}