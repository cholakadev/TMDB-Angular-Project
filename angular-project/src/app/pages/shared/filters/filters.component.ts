import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ISelectOption } from 'src/app/interfaces/select-option';
import { TMDB_SORTING_OPTIONS, TMDB_GENRE_OPTIONS, TMDB_YEARS_OPTIONS } from 'src/app/services/tmdb/tmdb.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() sortByChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() yearsChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() genreChanged: EventEmitter<string> = new EventEmitter<string>();

  filterFormGroup: FormGroup;
  filterSortByOptions: ISelectOption[] = TMDB_SORTING_OPTIONS;
  filterGenreOptions: ISelectOption[] = TMDB_GENRE_OPTIONS;
  filterYearsOptions: ISelectOption[] = TMDB_YEARS_OPTIONS;

  constructor() {
    this.filterFormGroup = new FormGroup({
      year: new FormControl('TMDB_YEARS_OPTIONS[0]'),
      sortBy: new FormControl('TMDB_SORTING_OPTIONS[0]'),
      genre: new FormControl('TMDB_GENRE_OPTIONS[0]'),
    });
  }

  ngOnInit(): void {
    this.filterFormGroup
      .get('year')
      .valueChanges.subscribe((option: ISelectOption) => {
        this.yearsChanged.emit(option.value.toString());
      });

    this.filterFormGroup
      .get('sortBy')
      .valueChanges.subscribe((option: ISelectOption) => {
        this.sortByChanged.emit(option.value.toString());
      });

    this.filterFormGroup
      .get('genre')
      .valueChanges.subscribe((option: ISelectOption) => {
        this.genreChanged.emit(option.value.toString());
      });
  }
}