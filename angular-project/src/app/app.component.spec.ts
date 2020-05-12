import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

describe('App Component', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;
    let debugElement: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
            ],
            imports: [
                AngularFireModule.initializeApp(environment.firebase),
                RouterTestingModule,
            ],
            providers: [
                provideMockStore(),
            ]
        });

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(component)
            .toBeTruthy();
    });

    it('brand should be TMDB', () => {
        expect(debugElement
            .nativeElement
            .querySelector('.navbar-brand').textContent)
            .toEqual('TMDB');
    });
});