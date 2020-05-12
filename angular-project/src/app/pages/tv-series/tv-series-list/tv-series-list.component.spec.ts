import { ITvSerie } from 'src/app/interfaces/tvseries';
import { SharedModule } from 'src/app/pages/shared/shared.module';
import { TvShowEffects } from './../tv-series-store/tv-series.effects';
import { AppModule } from './../../../app.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { TvSeriesListComponent } from './tv-series-list.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MemoizedSelector, StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as tvShowSelector from '../tv-series-store/tv-series.selectors';
import * as tvShowState from '../tv-series-store';
import { EffectsModule } from '@ngrx/effects';

describe('Tv Series List Component', () => {
    let fixture: ComponentFixture<TvSeriesListComponent>;
    let component: TvSeriesListComponent;
    let debugElement: DebugElement;
    let mockStore: MockStore;
    let mockTvShowsListSelector: MemoizedSelector<tvShowState.ITvShowsState, ITvSerie[]>;

    const mockedTvShows: ITvSerie[] = [
        {
            poster_path: 'Test Poster_Path',
            popularity: 5,
            id: 1,
            backdrop_path: 'Test Backdrop_Path',
            vote_average: 30,
            overview: 'Test Overview',
            first_air_date: '12/07/2020',
            origin_country: null,
            genre_ids: [
                12, 15, 20
            ],
            original_language: 'Spanish',
            vote_count: 69,
            name: 'Test',
            original_name: 'Test Name',
            original_title: 'Testing',
            adult: true,
        }
    ];

    beforeEach(async () => {

        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SharedModule,
                AppModule,
                StoreModule.forFeature(
                    tvShowState.tvShowsStateFeatureKey,
                    tvShowState.reducers
                ),
                EffectsModule.forFeature([TvShowEffects])
            ],
            declarations: [
                TvSeriesListComponent,
            ],
            providers: [
                provideMockStore(),
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(TvSeriesListComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;

        mockStore = TestBed.inject(MockStore);
        mockTvShowsListSelector = mockStore.overrideSelector(
            tvShowSelector.selectTvShow,
            mockedTvShows
        );
        mockTvShowsListSelector = mockStore.overrideSelector(
            tvShowSelector.selectError,
            null
        );
    });
    it('should create TvSeriesListComponent', async () => {
        mockStore.refreshState();
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
    it('should checks if tveries$ is empty', async () => {
        mockStore.refreshState();
        fixture.detectChanges();
        expect(component.tvseries$).toBeTruthy();
    });
    it('tveries$ should contains the mocked tv-shows', async () => {
        mockStore.refreshState();
        fixture.detectChanges();
        let convertedFromObserveble: ITvSerie[];
        component.tvseries$.subscribe(r => convertedFromObserveble = r);
        expect(convertedFromObserveble[0]).toEqual(mockedTvShows[0]);
    });
});