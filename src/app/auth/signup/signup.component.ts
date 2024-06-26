import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loginStart, signupStart } from '../state/auth.actions';
import { setLoadingSpinner } from 'src/app/store/shared/shared.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
public signupForm: FormGroup;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required])
    });
  }

  public onSignupSubmit() {
    const email =  this.signupForm.value.email;
    const password = this.signupForm.value.password;
    this.store.dispatch(setLoadingSpinner({status:true}));
    this.store.dispatch(signupStart({email, password}));
  }
}
