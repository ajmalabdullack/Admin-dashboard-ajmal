import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { StaffService } from '../staff.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'ngx-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.scss']
})
export class StaffFormComponent implements OnInit {

  images:any;

  staffDetails={
    name:"",
    designation:"",
    about:"",
    image:""
  }

  constructor(private staffService:StaffService, private router:Router ,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  addStaff(){
    this.staffDetails.image = this.staffDetails.image.replace('C:\\fakepath\\','');

    this.staffService.newStaff(this.images, this.staffDetails).subscribe(
      response => {
        if (response) {
          Swal.fire("Successfully Added", "success")
          .then(() => {
            this.router.navigate(['../staffs'], { relativeTo: this.route });
          })          }
        else {
          Swal.fire("Network Error", "Please do after sometime ", "error")
            .then(() => {
              this.router.navigate(['../staffs'], { relativeTo: this.route });
            })

        }
      })
    console.log(` upload image ${this.images}`); 
    console.log("called");
  
    
  }

  selectImage(event : any) {
    console.log('select image')
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
      console.log('inside if event')
    }
  }

}
