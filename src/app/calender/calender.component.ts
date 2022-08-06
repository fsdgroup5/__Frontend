import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { Router } from '@angular/router';
import { BookingService } from '../services/booking.service';
import { HallService } from '../services/hall.service';

declare var display: any;
declare const duplicate: any;
declare const setTime: any;
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  username =localStorage.getItem("username");
dates:any;

  HallsAvailable=[{
    HallName:'',
    Image:'',
  }]

  Time=[{
    Date:'',
    HallName:'',
    TimeSlot:''
  }]
  
  Booking_Details={
    Hallname:'',
    Date:'',
    Time:'',
    Class:'true',
    Username:this.username
  }
 

  handleDateClick(arg:any) {
   display(arg.dateStr);
  //  this.dates=arg.dateStr.toString();
  //   alert('date click! ' +this.dates)
  }

 calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    selectable: true,
    editable: true, 
    timeZone: 'Asia/Kolkata',
    aspectRatio: 2.3,
     
    validRange: function(currentDate) {
      var startDate = new Date(currentDate.valueOf());
       var endDate = new Date(currentDate.valueOf());
      return {
        start: currentDate,
        end: endDate.setDate(endDate.getDate() + 15)
      };
    },
    dateClick: this.handleDateClick.bind(this),
     
  };
  constructor(private hallService:HallService,private bookservice:BookingService,private router:Router ) { 
   
  }
  
  ngOnInit(): void {

    this.hallService.getHall().subscribe((data)=>{
      this.HallsAvailable=JSON.parse(JSON.stringify(data));
  }) 
  }
  Bookhall(){ 
    this.bookservice.Bookhall(this.Booking_Details);   
    alert("Successfully booked");
    this.router.navigate(['userbooking']);
  }
  
  // function( dateClickInfo ) { }
}
