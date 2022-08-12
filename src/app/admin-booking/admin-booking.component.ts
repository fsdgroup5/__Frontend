import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { Router } from '@angular/router';
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
    this.dateFilter();
  }

  dateFilter() {
    if (this.dates.startDate.length > 0 && this.dates.endDate.length > 0) {
      this.bookingservice.date_filter(this.dates.startDate, this.dates.endDate).subscribe((Data) => {
        this.bookingdtls = JSON.parse(JSON.stringify(Data));
      })

    }
    else {
      this.bookingservice.getAllDetails().subscribe((Data) => {
        this.bookingdtls = JSON.parse(JSON.stringify(Data));
        console.log(this.bookingdtls);
      })

    }
  }
bookingHistory() {
    this.bookingservice.getBookingHistory().subscribe((Data)=>{
      this.bookingdtls = JSON.parse(JSON.stringify(Data));
       console.log(this.bookingdtls); 
  })
  }
upcomingBookings() {
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


