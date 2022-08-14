import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.component.html',
  styleUrls: ['./admin-booking.component.css']
})
export class AdminBookingComponent implements OnInit {
  Today = new Date();
  pageTitle: string = 'All Booking Details';
  searchText: string = '';
  upcoming:any
  booking_history:any
  next = new Date();
  todayISO:any


  dates = {
    startDate: '',
    endDate: ''
  }

  bookingdtls = [{
    UserName: '',
    UserMailId: '',
    HallName: '',
    DateOfBooking: '',
    TimeSlot: '',
    Status: ''
  }]
  constructor(private bookingservice: BookingService, private router: Router) { }

  ngOnInit(): void {
    this.upcomingBookings();
    this.upcoming=true
    this.todayISO = new Date(this.next.getTime() - (this.next.getTimezoneOffset() * 60000)).toISOString().substring(0,10);
   
  }

  dateFilter() {
   
    if (this.dates.startDate.length > 0 ) {
      $('#datepicker-endDate').attr('min', this.dates.startDate);
        if(this.dates.endDate.length>0){
          this.bookingservice.date_filter(this.dates.startDate, this.dates.endDate).subscribe((Data) => {
            this.bookingdtls = JSON.parse(JSON.stringify(Data));
          })

        }
        else{
          // this.bookingservice.getAllDetails().subscribe((Data) => {
          //   this.bookingdtls = JSON.parse(JSON.stringify(Data));
          //   console.log(this.bookingdtls);
          // })
          this.upcomingBookings()
        }
    }
    else {
      this.upcomingBookings()
      $('#datepicker-endDate').val("") ;
    }
  }
bookingHistory() {
  
  this.upcoming=false
  this.booking_history=true
    this.bookingservice.getBookingHistory().subscribe((Data)=>{
      this.bookingdtls = JSON.parse(JSON.stringify(Data));
       console.log(this.bookingdtls); 
     
  })
  }
upcomingBookings() {
  this.booking_history=false
  this.upcoming=true
  this.bookingservice.getUpcomingBookings().subscribe((Data)=>{
    this.bookingdtls = JSON.parse(JSON.stringify(Data));
     console.log(this.bookingdtls);
})
  }
  editBooking(bookingdtls: any) { }

  deleteBooking(bookingdtls: any) {
    this.bookingservice.deleteDetails(bookingdtls._id)
      .subscribe((data) => {
        this.bookingdtls = this.bookingdtls.filter(p => p !== bookingdtls);
      })

  }

}


