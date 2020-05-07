import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _angularFireAuth: AngularFireAuth,
    private _router: Router) {
    this._angularFireAuth.authState.subscribe((user) => { }); // TODO
  }

  loginWithOauth(providerName: string) {
    this._router.navigate(['/movies']);
    return this._angularFireAuth
      .signInWithPopup(this.getProvider(providerName))
      .then((user) => { })
      .catch((error) => {
        console.log(error);
      });
  }

  getProvider(providerName: string) {
    switch (providerName) {
      case 'google':
        return new auth.GoogleAuthProvider();
      case 'facebook':
        return new auth.FacebookAuthProvider();
      case 'github':
        return new auth.GithubAuthProvider_Instance();
    }
  }

  logOut() {
    this._angularFireAuth
      .signOut()
      .then(() => {
        console.log('logged out!');
      })
      .catch((error) => {
        console.log('error');
      });
  }

  loginWithEmailAndPassword(
    credentials: { email: string; password: string },
    callback: (error?: any) => void
  ) {
    return this._angularFireAuth
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((response) => {
        console.log(credentials);
        callback();
      })
      .catch((error) => {
        callback(error);
      });
  }

  registerWithEmailAndPassword(
    credentials: { email: string; password: string },
    callback: (error?: any) => void
  ) {
    return this._angularFireAuth
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then((response) => {
        console.log(credentials);
        callback();
      })
      .catch((error) => {
        callback(error);
      });
  }
}
