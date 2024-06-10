import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { autoLogin, loginStart, loginSuccess, signupStart, signupSuccess } from "./auth.actions";
import { catchError, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";
import { AppState } from "src/app/store/app.state";
import { Store } from "@ngrx/store";
import { setErrorMessage, setLoadingSpinner } from "src/app/store/shared/shared.action";
import { of } from "rxjs";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { getErrorMessage } from "src/app/store/shared/shared.selectors";

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
              this.store.dispatch(setLoadingSpinner({status: false}));
              this.store.dispatch(setErrorMessage({errorMsg:''}));
                const user = this.authService.formatUser(data);
                this.authService.setUserInLocalStorage(user);
                return loginSuccess({user});
            }),
             catchError((errorResp) => {
              console.log(errorResp)
              const msg = this.authService.getErrorMessage(errorResp.error.error.message);
              this.store.dispatch(setLoadingSpinner({status: false}));

                return of(setErrorMessage({errorMsg:msg}));
      })
           );
    })); 
  });

 loginRedirect$ = createEffect((() => {
  return this.actions$.pipe(
    ofType(...[loginSuccess,signupSuccess]), tap((action) => {
      this.router.navigate(['/']);
    }))
 }),{dispatch: false});

  signUp$ = createEffect( () => {
    return this.actions$.pipe( ofType(signupStart), exhaustMap(
      (action) => {
        return this.authService.signUp(action.email, action.password).pipe(
          map(
            (data) => {
                 this.store.dispatch(setLoadingSpinner({status: false}));
                 this.store.dispatch(setErrorMessage({errorMsg:''}));
                 
              const user = this.authService.formatUser(data);
              console.log(user)
              this.authService.setUserInLocalStorage(user);
              return signupSuccess({user});
            }
          ),
          catchError(
            (errorResp) => {
              console.log(errorResp)
              const errorMsg = this.authService.getErrorMessage(errorResp.error.error.message);
              this.store.dispatch(setLoadingSpinner({status: false}));
              return of(setErrorMessage({errorMsg}));
            }
          )
        )
      }
    ));
  })

 autoLogin$ = createEffect( () => {
  return this.actions$.pipe( ofType(autoLogin), map((action) => {
    const user = this.authService.getUserFromLocalStorage();
    
  }
  ));
 }, {dispatch: false}


 )
}