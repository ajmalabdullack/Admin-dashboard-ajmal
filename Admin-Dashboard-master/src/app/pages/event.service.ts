import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EventService {
  item:any;

  constructor(private http:HttpClient) { }

  newEvent(image:any,item:any){
    console.log('inside service upload')
    const formData = new FormData();
    formData.append('file', image);  
    formData.append('name', item.name); 
    formData.append('shortdetails', item.shortdetails); 
    formData.append('moredetails', item.moredetails); 
    formData.append('boxdetails', item.boxdetails); 
    formData.append('coordinatorsdetail', item.coordinatorsdetail); 
    formData.append('registrationlink', item. registrationlink);
    formData.append('brouchurelink', item.brouchurelink);
    formData.append('programschedule', item.programschedule);
    formData.append('speakerslist', item.speakerslist);
    formData.append('button', item.button);
    formData.append('date', item.date);
    formData.append('image', item.image);
    
     

    return this.http.post("http://localhost:4000/event-insert",formData)
    .subscribe(data =>{console.log(data)})
  }
}
