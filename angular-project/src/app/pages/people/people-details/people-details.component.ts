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
    private activatedRoute: ActivatedRoute,
    private tmdbService: TmdbService,
    private router: Router
  ) {
    this.routerParameterId = activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.tmdbService
      .personDetails(this.routerParameterId)
      .subscribe((response) => {
        this.person = response;
      });

    this.tmdbService
      .personCombinedCredits(this.routerParameterId)
      .subscribe((response) => {
        this.credits = {
          cast: response.cast,
          crew: response.crew,
        };
      });
  }

  redirectToMedia(mediaType: string, castId) {
    const route = mediaType === 'movie' ? '/movies' : '/tv-shows';
    this.router.navigate([route, castId]);
  }
}
