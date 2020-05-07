// import { SharedModule } from './../../shared-modules/shared.module';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private _authService: AuthService, private _router: Router) { }

  logInWithGoogle() {
    console.log('logged with google');
    this._authService.loginWithOauth('google');
  }

  onSubmitLoginForm() {
    console.log('logged in!');
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

  onSubmitRegisterForm() {
    console.log('registered!');
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
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    this.registerForm = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
}
