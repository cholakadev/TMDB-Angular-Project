import { Component, OnInit } from '@angular/core';
import { IPerson, IPersonDetails } from 'src/app/interfaces/person';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IPersonCredit } from 'src/app/interfaces/response';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss'],
})
export class PeopleDetailsComponent implements OnInit {
  person: IPersonDetails;
  routerParameterId: number;

  credits: {
    cast: IPersonCredit[];
    crew: IPersonCredit[];
  } = {
      cast: [],
      crew: [],
    };

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _tmdbService: TmdbService,
    private _router: Router
  ) {
    this.routerParameterId = _activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this._tmdbService
      .personDetails(this.routerParameterId)
      .subscribe((response) => {
        this.person = response;
      });

    this._tmdbService
      .personCombinedCredits(this.routerParameterId)
      .subscribe((response) => {
        this.credits = {
          cast: response.cast,
          crew: response.crew,
        };
      });
  }

  redirectToMedia(mediaType: string, castId): void {
    const route = mediaType === 'movie' ? '/movies' : '/tv-shows';
    this._router.navigate([route, castId]);
  }
}
