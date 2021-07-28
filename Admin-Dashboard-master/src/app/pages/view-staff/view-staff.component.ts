import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';

@Component({
  selector: 'ngx-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.scss']
})
export class ViewStaffComponent implements OnInit {
   
  staffItem:any;
  imgPrev:any;
  name:any;
  designation:any;
  about:any;

  constructor(private staffService:StaffService) { }

  ngOnInit(): void {

    let staffId = localStorage.getItem("adminEditStaffID");
    this.staffService.getstaff(staffId).subscribe((data)=>{
    console.log(data);
    this.staffItem=JSON.parse(JSON.stringify(data));
    this.imgPrev    = this.staffItem.image;
    this.name =this.staffItem.name;
    this.designation =this.staffItem.designation;
    this.about =this.staffItem.about;

  })
}

}
