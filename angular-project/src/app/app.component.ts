import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';
import { IUser } from './interfaces/user';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IAuthState } from './pages/auth/auth-store';
import * as authActions from './pages/auth/auth-store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  isShown: boolean = false;

  user: IUser;

  destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private store: Store<IAuthState>) { }

  ngOnInit() {
    this._authService.userState.pipe(takeUntil(this.destroyed$)).subscribe(response => this.user = response);
  }

  logOut(): void {
    this.store.dispatch(authActions.logOut());
    this._router.navigate(['/auth']);
  }

  logIn(): void {
    this._router.navigate(['/auth']);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
