import { AppModule } from './../../../app.module';
import { IMovie } from 'src/app/interfaces/movie';
import { SharedModule } from 'src/app/pages/shared/shared.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MoviesListComponent } from './movies-list.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MemoizedSelector } from '@ngrx/store';
import * as movieState from '../movies-store';
import * as movieSelector from '../movies-store/movie.selectors';

describe('Movies List Component', () => {
    let fixture: ComponentFixture<MoviesListComponent>;
    let component: MoviesListComponent;
    let debugElement: DebugElement;
    let mockStore: MockStore;
    let mockMovieListSelector: MemoizedSelector<movieState.IMoviesState, IMovie[]>;
    let mockMovieListFailedSelector: MemoizedSelector<movieState.IMoviesState, string>;

    const mockMovies: IMovie[] = [{
        poster_path: 'Test Poster_Path',
        adult: false,
        overview: 'Test Overview',
        release_date: '24/10/2020',
        genre_ids: null,
        id: 1,
        original_title: 'Test Title',
        title: 'Testing',
        backdrop_path: 'Test Backdrop_Path',
        popularity: 10,
        vote_count: 10,
        video: false,
        vote_average: 9.5
    }];

    beforeEach(async () => {

        TestBed.configureTestingModule({
            declarations: [
                MoviesListComponent
            ],
            imports: [
                RouterTestingModule,
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SharedModule,
                AppModule
            ],
            providers: [
                provideMockStore(),
            ]
        });

        fixture = TestBed.createComponent(MoviesListComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;

        mockStore = TestBed.inject(MockStore);
        mockMovieListSelector = mockStore.overrideSelector(
            movieSelector.selectMovies,
            mockMovies
        );

        mockMovieListFailedSelector = mockStore.overrideSelector(
            movieSelector.selectError,
            null
        );
    });

    it('should create MovieListComponent', async () => {
        mockStore.refreshState();
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should check if movies$ is empty', async () => {
        mockStore.refreshState();
        fixture.detectChanges();
        expect(component.movies$).toBeTruthy();
    });

    it('should contains the mocked movies', async () => {
        mockStore.refreshState();
        fixture.detectChanges();
        let convertedFromObserveble: IMovie[];
        component.movies$.subscribe(r => convertedFromObserveble = r);
        expect(convertedFromObserveble[0]).toEqual(mockMovies[0]);
    });
});