import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { getLoading } from './store/shared/shared.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  public  title = 'counter';
  public loadingSpinner$ : Observable<boolean>;
  constructor(private store: Store<AppState>) {

  }

   ngOnInit(): void {
    this.loadingSpinner$ = this.store.select(getLoading);
  }
}
