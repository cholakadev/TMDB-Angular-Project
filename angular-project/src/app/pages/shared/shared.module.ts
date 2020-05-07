import { FiltersComponent } from 'src/app/pages/shared/filters/filters.component';
import { NgModule } from '@angular/core';
import { ImgFallbackDirective } from '../../directives/img-fallback/img-fallback.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
    declarations: [
        FiltersComponent,
        ImgFallbackDirective
    ],
    exports: [
        BsDropdownModule,
        ImgFallbackDirective,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        FiltersComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BsDropdownModule.forRoot(),
    ],
    providers: [],
})
export class SharedModule { }
