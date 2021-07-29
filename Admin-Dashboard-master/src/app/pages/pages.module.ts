import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { NbListModule,NbCardModule, NbWindowModule,
  




} from '@nebular/theme';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CourseFormComponent } from './course-form/course-form.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { StaffsComponent } from './staffs/staffs.component';
import { StaffFormComponent } from './staff-form/staff-form.component';
import { UsersComponent } from './users/users.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditStaffsComponent } from './edit-staffs/edit-staffs.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { SearchStaffNamePipe } from './search-staff-name.pipe';
import { SearchStaffDesignationPipe } from './search-staff-designation.pipe';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbListModule,
    NbCardModule,
    DragDropModule,
    NbWindowModule,
    FormsModule
  ],
  declarations: [
    PagesComponent,
    CoursesComponent,
    CourseFormComponent,
    ViewCourseComponent,
    StaffsComponent,
    StaffFormComponent,
    UsersComponent,
    TestimonialsComponent,
    EditStaffsComponent,
    ViewStaffComponent,
    SearchStaffNamePipe,
    SearchStaffDesignationPipe,
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule {
}
