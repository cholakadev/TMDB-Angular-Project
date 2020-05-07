import { FilterPipe } from './../../pipes/filter/filter.pipe';
import { MoviesFiltersComponent } from './movies-filters/movies-filters.component';
import { NgModule } from '@angular/core';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesListItemComponent } from './movies-list-item/movies-list-item.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SharedModule } from 'src/app/pages/shared/shared.module';
import { MoviesFilterPipe } from 'src/app/pipes/movies-filter-pipe/movies-filter.pipe';
import { MoviesComponent } from './movies.component';


@NgModule({
  declarations: [
    MoviesListComponent,
    MoviesListItemComponent,
    MovieDetailsComponent,
    MoviesFiltersComponent,
    MoviesFilterPipe,
    MoviesComponent,
  ],
  imports: [
    MoviesRoutingModule,
    SharedModule,
  ]
})
export class MoviesModule { }
