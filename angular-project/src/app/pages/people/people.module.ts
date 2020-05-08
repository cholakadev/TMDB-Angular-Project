import { SharedModule } from 'src/app/pages/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PeopleListItemComponent } from './people-list-item/people-list-item.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { FilterPipe } from 'src/app/pipes/filter/filter.pipe';


@NgModule({
  declarations: [
    PeopleComponent,
    PeopleListComponent,
    PeopleListItemComponent,
    PeopleDetailsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    SharedModule
  ]
})
export class PeopleModule { }
