import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeopleListComponent } from './pages/people/people-list/people-list.component';
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
    loadChildren: () => import('./pages/tv-series/tv-series.module').then(m => m.TvSeriesModule)
  },
  {
    path: 'people',
    component: PeopleListComponent
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
