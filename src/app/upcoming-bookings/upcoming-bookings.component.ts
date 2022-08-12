import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upcoming-bookings',
  templateUrl: './upcoming-bookings.component.html',
  styleUrls: ['./upcoming-bookings.component.css']
})
export class UpcomingBookingsComponent implements OnInit {

  pageTitle: string = 'Upcoming Bookings';
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
    this.bookingservice.getUpcomingBookings().subscribe((Data)=>{
      this.bookingdtls = JSON.parse(JSON.stringify(Data));
       console.log(this.bookingdtls);
      
  })
  }

}
