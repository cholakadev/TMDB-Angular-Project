import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _authService: AuthService, private _router: Router) {}

  logOut() {
    this._authService.logOut();
    this._router.navigate(['/auth']);
  }
}
