import { Component, OnInit } from '@angular/core';
import { IPerson } from 'src/app/interfaces/person';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
})
export class PeopleListComponent implements OnInit {
  people: IPerson[];

  searchText: '';

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.discoverPeople().subscribe((response) => {
      this.people = response.results;
    });
  }
}
