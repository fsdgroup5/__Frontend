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
        return this.http.delete("http://localhost:3000/remove_booking/"+id)
     }

     getdate(dt:any){}
     
   Bookhall(Bookings:any){
    return this.http.post("http://localhost:3000/newBooking",{"BookingDetails":Bookings})
    .subscribe(data=>{console.log(data)})
   }
   getTime(Hall:any,Date:any){
    // let params = new HttpParams()
    // .set('Hall', Hall)
    // .set('Date', Date);
    // alert(params);
    return this.http.get("http://localhost:3000/Time/"+Hall+"/"+Date);
  }
}




