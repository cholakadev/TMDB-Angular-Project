import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module'

import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [AuthComponent],
  imports: [
    AuthRoutingModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
