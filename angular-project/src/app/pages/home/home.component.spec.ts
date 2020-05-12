import { HomeComponent } from './home.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
describe('Home Component', () => {

    let fixture: ComponentFixture<HomeComponent>;
    let component: HomeComponent;
    let debugElement: DebugElement;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent
            ]
        });

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        fixture.detectChanges;
    });

    it('should have heading "Welcome! Hope you find the best movie for tonight."', () => {
        expect(debugElement
            .nativeElement
            .querySelector('h1')
            .textContent)
            .toEqual('Welcome! Hope you find the best movie for tonight.');
    });

});