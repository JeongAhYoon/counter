import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess } from "./auth.actions";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";
import { AppState } from "src/app/store/app.state";
import { Store } from "@ngrx/store";
import { setErrorMessage, setLoadingSpinner } from "src/app/store/shared/shared.action";
import { of } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
  constructor (private actions$: Actions, 
    private authService: AuthService,
  private store:Store<AppState>, 
private router: Router) {}

  login$ = createEffect(() => {
    return this.actions$.pipe( ofType(loginStart), exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          
            map((data) => {
              console.log(data);
              this.store.dispatch(setLoadingSpinner({status: false}));
                const user = this.authService.formatUser(data);
                return loginSuccess({user});
            }),
             catchError((errorResp) => {
              const msg = this.authService.getErrorMessage(errorResp.error.error.message);
              this.store.dispatch(setLoadingSpinner({status: true}));

                return of(setErrorMessage({errorMsg:msg}));
      })
           );
    })); 
  });

 loginRedirect$ = createEffect((() => {
  return this.actions$.pipe(
    ofType(loginSuccess), tap((action) => {
      this.router.navigate(['/']);
    })
  )

 }),{dispatch: false});



}