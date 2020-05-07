import { IMovie } from './movie';
import { ITvSerie } from './tvseries';
import { IPerson } from './person';

export interface IDiscoverMovieResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: IMovie[] 
}

export interface IDiscoverTvShowsResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: ITvSerie[] 
}

export interface IDiscoverPeopleResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: IPerson[] 
}

export interface IPersonCredit{
    id: number;
    department: string;
    original_language: string;
    original_title: string;
    job: string;
    overview: string;
    vote_count: 3;
    video: boolean;
    media_type: string;
    poster_path: string | null;
    backdrop_path: string | null;
    title: string;
    popularity: number;
    genre_ids: number[];
    vote_average: number;
    adult: false;
    release_date: string;
    credit_id: string;
}

export interface IPersonCombinedCreditsResponse{
    id: number;
    crew: Array<IPersonCredit>;
    cast: Array<IPersonCredit>;
}