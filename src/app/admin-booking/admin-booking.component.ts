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
  Today =new Date();
  pageTitle: string = 'All Booking Details';

  searchText:string ='';

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
    this.bookingservice.getAllDetails().subscribe((Data)=>{
    this.bookingdtls = JSON.parse(JSON.stringify(Data));
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


