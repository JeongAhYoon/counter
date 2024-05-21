import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/posts.selectors';
import { Post } from 'src/app/models/posts.model';
import { Subscription } from 'rxjs';
import { updatePost } from '../state/posts.actions';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy{
public postForm : FormGroup;
public post: Post;
public postSubscription : Subscription;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }
 
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        const id = params.get('id');
  
        this.store.select(getPostById, {id: id}).subscribe((data) =>{
          this.post = data;    
          this.createForm();
        });
      }
    );
   
  }

private createForm() {
  this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(this.post.description, [Validators.required, Validators.minLength(10)])
    });
}
public editPost() {
 const post: Post = {
    id: this.post.id,
    title: this.postForm.value.title,
    description: this.postForm.value.description
  };
  this.store.dispatch(updatePost({value: post}));
}

public showErrorMsg() : string {
  const form = this.postForm.get('description');
  if(form.touched && !form.valid) {
    if(form.errors.minlength) {
        return 'The minimum length should be minimum 10 characters';
      }
    if(form.errors.required) {
      return 'Description is required';
    }
  }

}

 ngOnDestroy(): void {
  if(this.postSubscription) {
    this.postSubscription.unsubscribe();
  }
 }
}
