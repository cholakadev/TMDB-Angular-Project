import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  IDiscoverPageContent,
  IPersonCombinedCreditsResponse,
} from 'src/app/interfaces/response';
import { Observable } from 'rxjs';
import { IMovie } from 'src/app/interfaces/movie';
import { environment } from 'src/environments/environment';
import { ITvSerie } from 'src/app/interfaces/tvseries';
import { ISelectOption } from 'src/app/interfaces/select-option';
import { IPersonDetails, IPerson } from 'src/app/interfaces/person';

export const TMDB_SORTING_OPTIONS: ISelectOption[] = [
  {
    label: 'Popularity Descending',
    value: 'popularity.desc',
  },
  {
    label: 'Popularity Ascending',
    value: 'popularity.asc',
  },
];

export const TMDB_GENRE_OPTIONS: ISelectOption[] = [
  {
    label: 'All',
    value: '',
  },
  {
    label: 'Action',
    value: 28,
  },
  {
    label: 'Adventure',
    value: 12,
  },
  {
    label: 'Animation',
    value: 16,
  },
];

const generateYearsOptions = (): ISelectOption[] => {
  let yearsOption: ISelectOption[] = [{ label: 'All', value: '' }];
  for (let i: number = new Date().getFullYear(); i >= 1900; i--) {
    yearsOption.push({ label: i.toString(), value: i });
  }
  return yearsOption;
};

export const TMDB_YEARS_OPTIONS: ISelectOption[] = generateYearsOptions();

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private _BASE_URL = environment.tmdb.baseUrl;
  private _API_KEY = environment.tmdb.apiKey;

  constructor(private httpClient: HttpClient) { }

  private UrlBuilder(endpoint: string, params?: object): string {
    const queryParams = params
      ? Object.keys(params)
        .map((key) => key + '=' + params[key])
        .join('&')
      : '';
    return `${this._BASE_URL}${endpoint}?api_key=${this._API_KEY}&${queryParams}`;
  }

  discoverMovie(params: any): Observable<IDiscoverPageContent<IMovie>> {
    return this.httpClient.get<IDiscoverPageContent<IMovie>>(
      this.UrlBuilder('/discover/movie', params)
    );
  }

  movie(id: number): Observable<IMovie> {
    return this.httpClient.get<IMovie>(
      `${this._BASE_URL}/movie/${id}?api_key=${this._API_KEY}`
    );
  }

  discoverTvShow(params: any): Observable<IDiscoverPageContent<ITvSerie>> {
    return this.httpClient.get<IDiscoverPageContent<ITvSerie>>(
      this.UrlBuilder('/discover/tv', params)
    );
  }

  tvseries(id: number): Observable<ITvSerie> {
    return this.httpClient.get<ITvSerie>(
      `${this._BASE_URL}/tv/${id}?api_key=${this._API_KEY}`
    );
  }

  discoverPeople(): Observable<IDiscoverPageContent<IPerson>> {
    return this.httpClient.get<IDiscoverPageContent<IPerson>>(
      `${this._BASE_URL}/person/popular?api_key=${this._API_KEY}`
    );
  }

  personDetails(id: number): Observable<IPersonDetails> {
    return this.httpClient.get<IPersonDetails>(
      this.UrlBuilder(`/person/${id}`)
    );
  }

  personCombinedCredits(
    id: number
  ): Observable<IPersonCombinedCreditsResponse> {
    return this.httpClient.get<IPersonCombinedCreditsResponse>(
      this.UrlBuilder(`/person/${id}/combined_credits`)
    );
  }
}
