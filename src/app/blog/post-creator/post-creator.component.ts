import { Component, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-creator',
  templateUrl: './post-creator.component.html'
})
export class PostCreatorComponent {
  minTitleLength: number = 5;
  minPostLength: number = 5;

  get errorValidation(): Boolean {
    return this.postForm.controls.title.invalid && this.postForm.controls.title.touched;
  }
  get errorPostValidation(): Boolean {
    return this.postForm.controls.text.invalid && this.postForm.controls.text.touched;
  }

  postForm = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(this.minTitleLength)]],
    text: ['', [Validators.required, Validators.minLength(this.minPostLength)]],
  });

  constructor(private postService: PostService,
    private route: Router,
    private formBuilder: FormBuilder) { }

  addPost() {
    if ([this.postForm.valid]) {
      this.postService.addPost(this.postForm.getRawValue()).subscribe(() => this.route.navigate(['/']))
    }
  }

}