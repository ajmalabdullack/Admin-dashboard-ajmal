import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { CoursesComponent } from './courses/courses.component';
import { StaffsComponent } from './staffs/staffs.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { UsersComponent } from './users/users.component';
import { StaffFormComponent } from './staff-form/staff-form.component';
import { EditStaffsComponent } from './edit-staffs/edit-staffs.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { EventsComponent } from './events/events.component';
import { EventsFormComponent } from './events-form/events-form.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'staffs',
      component: StaffsComponent,
    },
    {
      path: 'addstaff',
      component: StaffFormComponent,
    },
    {
      path: 'editstaff',
      component:EditStaffsComponent,
    },
    {
      path:'viewstaff',
      component:ViewStaffComponent,
    },
    {
      path: 'courses',
      component:CoursesComponent,
    },
    {
      path: 'testimonials',
      component:TestimonialsComponent,
    },
    {
      path: 'users',
      component: UsersComponent,
    },
    {
      path:'events',
      component:EventsComponent
    },
    {
      path:'addevents',
      component:EventsFormComponent
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
