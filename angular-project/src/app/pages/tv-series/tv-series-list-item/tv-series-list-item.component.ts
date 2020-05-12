import { Component, Input } from '@angular/core';
import { ITvSerie } from 'src/app/interfaces/tvseries';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tv-series-list-item',
  templateUrl: './tv-series-list-item.component.html',
  styleUrls: ['./tv-series-list-item.component.scss'],
})
export class TvSeriesListItemComponent {
  @Input() tvshow: ITvSerie;

  constructor(
    private _router: Router) { }

  redirect(): void {
    this._router.navigate(['/tv-series', this.tvshow.id]);
  }
}
