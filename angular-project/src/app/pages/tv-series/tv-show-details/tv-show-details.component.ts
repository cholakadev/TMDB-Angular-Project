import { Component } from '@angular/core';
import { ITvSerie } from 'src/app/interfaces/tvseries';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.scss'],
})
export class TvShowDetailsComponent {
  tvshow: ITvSerie;
  routeParameterId: number;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _tmdbService: TmdbService
  ) {
    this.routeParameterId = this._activatedRoute.snapshot.params.id;

    this._tmdbService.tvseries(this.routeParameterId).subscribe((response) => {
      this.tvshow = response;
    });
  }

}
