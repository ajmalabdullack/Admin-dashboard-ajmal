import { Component, OnInit } from '@angular/core';

import { moveItemInArray, CdkDragDrop } from "@angular/cdk/drag-drop";
import { NbWindowService } from '@nebular/theme';
import { StaffFormComponent } from '../staff-form/staff-form.component';
import { ViewCourseComponent } from '../view-course/view-course.component';

import { ActivatedRoute,Router } from '@angular/router';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder,  NbCheckboxComponent  } from '@nebular/theme';
import { StaffService } from '../staff.service';

@Component({
  selector: 'ngx-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.scss']
})
export class StaffsComponent implements OnInit {

  staffs={
    name:"",
    designation:"",
    email:"",
    image:""
  }

  constructor(private windowService:NbWindowService, private staffService:StaffService) { }

  ngOnInit(): void {
    this.staffService.getstaffs().subscribe((data)=>{
      this.staffs=JSON.parse(JSON.stringify(data));
    })
  }

  addStaff() {
    this.windowService.open(StaffFormComponent, { title: `Add Staff` });
  }
  

}
