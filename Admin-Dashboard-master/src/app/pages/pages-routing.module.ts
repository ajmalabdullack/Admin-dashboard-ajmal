import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { CoursesComponent } from './courses/courses.component';
import { StaffsComponent } from './staffs/staffs.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { UsersComponent } from './users/users.component';
import { StaffFormComponent } from './staff-form/staff-form.component';
import { EditStaffsComponent } from './edit-staffs/edit-staffs.component';

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
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
