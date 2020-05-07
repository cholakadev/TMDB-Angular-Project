import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movies: IMovie;
  routerParameterId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tmdbService: TmdbService
  ) {
    this.routerParameterId = activatedRoute.snapshot.params.id;
  }
  ngOnInit(): void {
    this.tmdbService.movie(this.routerParameterId).subscribe((response) => {
      this.movies = response;
    });
  }
}
