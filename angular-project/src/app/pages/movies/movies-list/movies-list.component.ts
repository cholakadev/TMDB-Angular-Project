import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie';
import {
  TmdbService,
  TMDB_SORTING_OPTIONS,
  TMDB_YEARS_OPTIONS,
  TMDB_GENRE_OPTIONS,
} from 'src/app/services/tmdb/tmdb.service';
import { DataStorageService } from 'src/app/services/data-storage/data-storage.service';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  movies: IMovie[];
  searchText: '';
  currentUser: IUser;

  filterSettings = {
    sort_by: TMDB_SORTING_OPTIONS[0].value.toString(),
    primary_release_year: TMDB_YEARS_OPTIONS[0].value.toString(),
    with_genres: TMDB_GENRE_OPTIONS[0].value.toString(),
  };

  constructor(
    private tmdbService: TmdbService,
    private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.tmdbService
      .discoverMovie(this.filterSettings)
      .subscribe((response) => {
        this.movies = response.results;
      });
  }

  onGenreChanged(value: string): void {
    this.filterSettings.with_genres = value;
    this.tmdbService
      .discoverMovie(this.filterSettings)
      .subscribe((response) => {
        this.movies = response.results;
      });
  }

  onYearsChanged(value: string): void {
    this.filterSettings.primary_release_year = value;
    this.tmdbService
      .discoverMovie(this.filterSettings)
      .subscribe((response) => {
        this.movies = response.results;
      });
  }

  onSortByChanged(value: string): void {
    this.filterSettings.sort_by = value;
    this.tmdbService
      .discoverMovie(this.filterSettings)
      .subscribe((response) => {
        this.movies = response.results;
      });
  }

  addToWatchlist(movie: IMovie): void {
    this.dataStorageService.addMediaToWatchlist(movie, this.currentUser.uid, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Added to Watchlist');
      }
    });
  }

  addToFavorites(movie: IMovie): void {
    this.dataStorageService.addMediaToFavorite(movie, this.currentUser.uid, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Added to Favorites');
      }
    });
  }
}
