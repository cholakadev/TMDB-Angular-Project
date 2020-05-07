import { Component, OnInit } from '@angular/core';
import { ITvSerie } from 'src/app/interfaces/tvseries';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.scss'],
})
export class TvShowDetailsComponent implements OnInit {
  tvshow: ITvSerie;
  routerParameterId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tmdbService: TmdbService
  ) {
    this.routerParameterId = activatedRoute.snapshot.params.id;

    this.tmdbService.tvseries(this.routerParameterId).subscribe((response) => {
      this.tvshow = response;
    });
  }

  ngOnInit(): void {}
}
