import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getPost } from '../state/posts.selectors';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';

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

}
