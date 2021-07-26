import { Component, OnInit } from '@angular/core';

import { moveItemInArray, CdkDragDrop } from "@angular/cdk/drag-drop";
import { NbWindowService } from '@nebular/theme';
import { StaffFormComponent } from '../staff-form/staff-form.component';
import { ViewCourseComponent } from '../view-course/view-course.component';

import { ActivatedRoute,Router } from '@angular/router';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder,  NbCheckboxComponent  } from '@nebular/theme';
import { StaffService } from '../staff.service';

import Swal from 'sweetalert2';



@Component({
  selector: 'ngx-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.scss']
})
export class StaffsComponent implements OnInit {
  

  staffs=[{
    name:"",
    designation:"",
    about:"",
    image:""
  }]

  constructor(private windowService:NbWindowService, private staffService:StaffService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.staffService.getstaffs().subscribe((data)=>{
      this.staffs=JSON.parse(JSON.stringify(data));
    })
  }

  addStaff() {
    this.router.navigate(['../addstaff'], { relativeTo: this.route });
  }

  editStaff(staff : any) {
    console.log('here iam');
    localStorage.setItem("adminEditStaffID", staff._id.toString());
    
    this.router.navigate(['../editstaff'], { relativeTo: this.route });
  }

  deleteStaff(staff){
    // console.log('inside delete')
    // localStorage.setItem("adminDeleteStaffID", staff._id.toString());
    // this.windowService.open(DeleteStaffComponent,{ title: `delete Staff` });
    
    Swal.fire({
      title: "Are you sure?",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete it!",
      denyButtonText: "No, cancel please!",
      showDenyButton: true,
      text: "You won't be able to revert this!",
      icon: 'warning',
      cancelButtonColor: '#d33',

    }).then((result) => {
      if (result.isConfirmed) {
        this.staffService.deletestaff(staff)
          .subscribe(
            response => {
              if (response) {
                Swal.fire("Sucessfully Deleted", "success")
                  .then(() => {
                    let currentUrl = this.router.url;
                    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                    this.router.navigate([currentUrl]);
                    });
                  })
              }
              else {
                Swal.fire("Network Error", "Please do after sometime ", "error")
                  .then(() => {
                    this.router.navigate(['../staffs']);
                  })


              }
            }

          )

      }
      else {
        Swal.fire("Cancelled", "Your  Staff record is safe ", "error");
      }

    })

  }

  ////
}
  
  


