import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookingdtls ={
    UserName :'',
    UserMailId:'',
    HallName:'',
    DateOfBooking:'',
    TimeSlot:'',
    Status:''
  }
    constructor(private http:HttpClient) { }
   
   
    getDetails(username:any){
      return this.http.get("http://localhost:3000/"+username);
    }

    deleteDetails(id:any)
    {
        return this.http.delete("http://localhost:3000/remove/"+id)
     }
}




