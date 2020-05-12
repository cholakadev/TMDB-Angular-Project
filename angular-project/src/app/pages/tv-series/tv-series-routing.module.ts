import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { TvSeriesListComponent } from './tv-series-list/tv-series-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: TvSeriesListComponent
  },
  {
    path: ':id',
    component: TvShowDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvSeriesRoutingModule { }
