import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import * as authActions from './auth-store/auth.actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { IAuthState } from './auth-store';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  authSwitch = 'login';
  loginForm: FormGroup;
  registerForm: FormGroup;
  loginFormError = '';
  registerFormError = '';

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _angularFireAuth: AngularFireAuth,
    private _store: Store<IAuthState>) { }

  logInWithGoogle(): void {
    this._angularFireAuth.authState.subscribe(r => console.log(r));
    this._store.dispatch(authActions.logInWithOauth({ provider: 'google' }));
  }

  onSubmitLoginForm(): void {
    this._authService.loginWithEmailAndPassword(
      this.loginForm.value,
      (error) => {
        if (error) {
          this.loginFormError = error;
        } else {
          this._router.navigate(['/movies']);
        }
      }
    );
  }

  onSubmitRegisterForm(): void {
    this._authService.registerWithEmailAndPassword(
      this.registerForm.value,
      (error) => {
        if (error) {
          this.registerFormError = error;
        } else {
          this._router.navigate(['/movies']);
        }
      }
    );
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email]),
    });

    this.registerForm = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email]),
    });
  }
}
