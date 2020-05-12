import * as tvShowState from './tv-series-store';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';

import { TvSeriesRoutingModule } from './tv-series-routing.module';
import { TvSeriesComponent } from './tv-series.component';
import { TvSeriesListComponent } from './tv-series-list/tv-series-list.component';
import { TvSeriesListItemComponent } from './tv-series-list-item/tv-series-list-item.component';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TvShowEffects } from './tv-series-store/tv-series.effects';


@NgModule({
  declarations: [
    TvSeriesComponent,
    TvSeriesListComponent,
    TvSeriesListItemComponent,
    TvShowDetailsComponent,
    TvSeriesComponent,
  ],
  imports: [
    TvSeriesRoutingModule,
    SharedModule,
    StoreModule.forFeature(
      tvShowState.tvShowsStateFeatureKey,
      [tvShowState.reducers, tvShowState.tvShowDetailsReducer]
    ),
    EffectsModule.forFeature([TvShowEffects])
  ]
})
export class TvSeriesModule { }
