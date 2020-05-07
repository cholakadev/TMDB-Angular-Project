import { Component, OnInit } from '@angular/core';
import { ITvSerie } from 'src/app/interfaces/tvseries';
import {
  TmdbService,
  TMDB_SORTING_OPTIONS,
  TMDB_YEARS_OPTIONS,
  TMDB_GENRE_OPTIONS,
} from 'src/app/services/tmdb/tmdb.service';

@Component({
  selector: 'app-tv-series-list',
  templateUrl: './tv-series-list.component.html',
  styleUrls: ['./tv-series-list.component.scss'],
})
export class TvSeriesListComponent implements OnInit {
  tvseries: ITvSerie[];

  filterSettings = {
    sort_by: TMDB_SORTING_OPTIONS[0].value.toString(),
    first_air_date: TMDB_YEARS_OPTIONS[0].value.toString(),
    with_genres: TMDB_GENRE_OPTIONS[0].value.toString(),
  };

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.tmdbService
      .discoverTvShow(this.filterSettings)
      .subscribe((response) => {
        this.tvseries = response.results;
      });
  }

  onGenreChanged(value: string) {
    this.filterSettings.with_genres = value;
    this.tmdbService
      .discoverTvShow(this.filterSettings)
      .subscribe((response) => {
        this.tvseries = response.results;
      });
  }

  onYearsChanged(value: string) {
    this.filterSettings.first_air_date = value;
    this.tmdbService
      .discoverTvShow(this.filterSettings)
      .subscribe((response) => {
        this.tvseries = response.results;
      });
  }

  onSortByChanged(value: string) {
    this.filterSettings.sort_by = value;
    this.tmdbService
      .discoverTvShow(this.filterSettings)
      .subscribe((response) => {
        this.tvseries = response.results;
      });
  }
}
