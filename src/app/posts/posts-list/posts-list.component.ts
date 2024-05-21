import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getPost } from '../state/posts.selectors';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { deletePost } from '../state/posts.actions';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  public posts$ : Observable<Post[]>
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.posts$ = this.store.select(getPost);
  }

  public deletePost(id: string) {
    if(confirm('Do you want to delete it?')) {
      this.store.dispatch(deletePost({value: id}));
    }
  }

}
