import { MoviesModule } from './pages/movies/movies.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesListComponent } from './pages/movies/movies-list/movies-list.component';
import { TvSeriesListComponent } from './pages/tv-series/tv-series-list/tv-series-list.component';
import { PeopleListComponent } from './pages/people/people-list/people-list.component';
import { MovieDetailsComponent } from './pages/movies/movie-details/movie-details.component';
import { TvShowDetailsComponent } from './pages/tv-series/tv-show-details/tv-show-details.component';
import { PeopleDetailsComponent } from './pages/people/people-details/people-details.component';
import { AuthComponent } from './pages/auth/auth.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'movies',
    loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path: 'tv-series',
    component: TvSeriesListComponent
  },
  {
    path: 'people',
    component: PeopleListComponent
  },
  {
    path: 'tv-series/:id',
    component: TvShowDetailsComponent
  },
  {
    path: 'people/:id',
    component: PeopleDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
