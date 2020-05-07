import { Component, OnInit, Input } from '@angular/core';
import { ITvSerie } from 'src/app/interfaces/tvseries';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tv-series-list-item',
  templateUrl: './tv-series-list-item.component.html',
  styleUrls: ['./tv-series-list-item.component.scss'],
})
export class TvSeriesListItemComponent implements OnInit {
  @Input() tvshow: ITvSerie;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirect() {
    this.router.navigate(['/tv-series', this.tvshow.id]);
  }
}
