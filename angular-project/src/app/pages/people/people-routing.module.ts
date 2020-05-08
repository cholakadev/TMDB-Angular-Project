import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people.component';


const routes: Routes = [
  {
    path: '',
    component: PeopleComponent,
    children: [
      {
        path: '',
        component: PeopleListComponent,
      },
      {
        path: ':id',
        component: PeopleDetailsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
