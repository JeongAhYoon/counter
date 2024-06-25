import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { autoLogout } from 'src/app/auth/state/auth.actions';
import { getUserState } from 'src/app/auth/state/auth.selector';
import { AppState } from 'src/app/store/app.state';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public authentificated$: Observable<boolean>;
  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.authentificated$ = this.store.select(getUserState);
  }

  public logout(event: Event) {
    event.preventDefault();
    this.store.dispatch(autoLogout());
  }

}
