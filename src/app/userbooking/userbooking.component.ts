import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userbooking',
  templateUrl: './userbooking.component.html',
  styleUrls: ['./userbooking.component.css']
})
export class UserbookingComponent implements OnInit {

  pageTitle: string = ` My Booking Details`;

  bookingdtls=[{
    UserName :'',
    UserMailId:'',
    HallName:'',
    DateOfBooking:'',
    TimeSlot:'',
    Status:''
   }]
  constructor(private bookingservice:BookingService ,private router:Router) { }

  ngOnInit(): void {
   let username =localStorage.getItem("username");
    this.bookingservice.getDetails(username).subscribe((data)=>{
      this.bookingdtls = JSON.parse(JSON.stringify(data));
      console.log(this.bookingdtls);
  })
  }


  editBooking (bookingdtls:any){}

  deleteBooking (bookingdtls:any)
    {
    this.bookingservice.deleteDetails(bookingdtls._id)
      .subscribe((data) => {
        this.bookingdtls = this.bookingdtls.filter(p => p !== bookingdtls);
      })
  
  }

}

 