import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  pageTitle: string = 'Booking History';
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
    this.bookingservice.getBookingHistory().subscribe((Data)=>{
      this.bookingdtls = JSON.parse(JSON.stringify(Data));
       console.log(this.bookingdtls);
      
  })
  }

}
