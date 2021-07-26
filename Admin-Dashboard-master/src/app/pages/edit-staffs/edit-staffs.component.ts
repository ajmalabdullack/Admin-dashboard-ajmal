import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from '../staff.service';

@Component({
  selector: 'ngx-edit-staffs',
  templateUrl: './edit-staffs.component.html',
  styleUrls: ['./edit-staffs.component.scss']
})
export class EditStaffsComponent implements OnInit {

  images:any;
  submitted : boolean = false;
  imageModified : boolean=false;
  imgPrev  : any ='';

  staffItem={
    name:"",
    designation:"",
    about:"",
    image:""
  }

  constructor(private staffService:StaffService, private router:Router) { }

  ngOnInit(): void {
    this.submitted = false;
    this.imageModified=false;
    let staffId = localStorage.getItem("adminEditStaffID");
    this.staffService.getstaff(staffId).subscribe((data)=>{
    console.log(data);
    this.staffItem=JSON.parse(JSON.stringify(data));
    this.imgPrev    = this.staffItem.image;
  })
  }

  editStaff(){
    this.staffItem.image = this.staffItem.image.replace('C:\\fakepath\\','');
    if (this.imageModified){
      this.staffService.editStaffWithImage(this.images, this.staffItem);
    }
    else{
    this.staffService.editStaff(this.staffItem);
    }
     localStorage.setItem('authorAlertMsg', `The author ${this.staffItem.name} is updated`); 
     this.router.navigate(['/pages/staffs']);   
  
  }

  updateImage(event : any) {
    this.imageModified= true;
    console.log('select image')
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
      console.log('inside if event')
    }
  }

}
