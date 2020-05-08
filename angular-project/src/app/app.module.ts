import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { PeopleListComponent } from './pages/people/people-list/people-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PeopleListItemComponent } from './pages/people/people-list-item/people-list-item.component';
import { PeopleDetailsComponent } from './pages/people/people-details/people-details.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AuthComponent } from './pages/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeopleListComponent,
    PeopleListItemComponent,
    PeopleDetailsComponent,
    AuthComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ButtonsModule.forRoot(),
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
