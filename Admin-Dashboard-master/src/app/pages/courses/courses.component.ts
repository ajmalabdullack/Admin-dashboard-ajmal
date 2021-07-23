import { Component, OnInit } from '@angular/core';
import { fruits } from './fruits-list';
import { moveItemInArray, CdkDragDrop } from "@angular/cdk/drag-drop";
import { NbWindowService } from '@nebular/theme';
import { CourseFormComponent } from '../course-form/course-form.component';
import { ViewCourseComponent } from '../view-course/view-course.component';



@Component({
  selector: 'ngx-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private windowService: NbWindowService) { }

  ngOnInit(): void {
  }
  fruits = fruits;

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.fruits, event.previousIndex, event.currentIndex);

  }
  viewCourse() {
    this.windowService.open( ViewCourseComponent , { title: `View Course` });

  }
  editCourse() {
    this.windowService.open(CourseFormComponent, { title: `Edit Course` });
  }
  
  deleteCourse() {
    
  }
}


