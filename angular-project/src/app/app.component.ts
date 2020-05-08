import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';
import { IUser } from './interfaces/user';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  isShown: boolean = false;

  user: IUser;

  destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _authService: AuthService,
    private _router: Router) {
    this._authService.userState.subscribe(user => {
      this.user = user;
    })
  }

  logOut(): void {
    this._authService.logOut();
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
