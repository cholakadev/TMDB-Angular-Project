import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list-item',
  templateUrl: './movies-list-item.component.html',
  styleUrls: ['./movies-list-item.component.scss'],
})
export class MoviesListItemComponent {
  @Input() movie: IMovie;

  constructor(private router: Router) {}

  redirect() {
    this.router.navigate(['/movies', this.movie.id]);
  }
}
