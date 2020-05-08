import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie';
import { Router } from '@angular/router';
import { faList, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movies-list-item',
  templateUrl: './movies-list-item.component.html',
  styleUrls: ['./movies-list-item.component.scss'],
})
export class MoviesListItemComponent {
  @Input() movie: IMovie;
  @Output() addedToWatchlist = new EventEmitter<IMovie>();
  @Output() addedToFavorite = new EventEmitter<IMovie>();

  faList = faList;
  faHeart = faHeart;

  constructor(private router: Router) { }

  redirect() {
    this.router.navigate(['/movies', this.movie.id]);
  }

  addToWatchlist() {
    this.addedToWatchlist.emit(this.movie);
  }

  addToFavorite() {
    this.addedToFavorite.emit(this.movie);
  }
}
