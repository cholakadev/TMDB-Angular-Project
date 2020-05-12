import { MovieEffects } from './movies-store/movie.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesListItemComponent } from './movies-list-item/movies-list-item.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SharedModule } from 'src/app/pages/shared/shared.module';
import * as movieState from './movies-store';


@NgModule({
  declarations: [
    MoviesListComponent,
    MoviesListItemComponent,
    MovieDetailsComponent,
  ],
  imports: [
    MoviesRoutingModule,
    SharedModule,
    FontAwesomeModule,
    StoreModule.forFeature(
      movieState.moviesStateFeatureKey,
      movieState.reducers
    ),
    EffectsModule.forFeature([MovieEffects])
  ]
})
export class MoviesModule { }
