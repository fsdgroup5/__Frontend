import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { Router } from '@angular/router';
import { BookingService } from '../services/booking.service';
import { HallService } from '../services/hall.service';
import * as $ from 'jquery';

declare var display: any;
declare const setTime: any;
declare const dateBlock: any;
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  username =localStorage.getItem("username");
  dates:any;
  error:any;
  error1:any;
  times:any;
  error_msg='';
  
  setTime(){
    $('#times').prop('selectedIndex',0);
    // $('#times').addClass('ng-invalid');
       this.error=false;
       this.error1=false;
  }
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
  //  this.error1=false;
   this.error=false;
   this.error_msg=''
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
  
  checktime(){
    this.bookservice.getTime(this.Booking_Details.Hallname,this.Booking_Details.Date,this.Booking_Details.Time,this.username).subscribe((data)=>{
      this.Time = JSON.parse(JSON.stringify(data));
  },
  err=>{
    if(err.status==200){
      this.error=false;
      // this.error1=false;
    }
    if(err.status==201){
      // this.error1=true;
      this.error=true;
      this.error_msg='You already have another booking for the timeslot'
    }
    if(err.status==401){
      this.error=true;
      this.error_msg='TimeSlot not available'
    }
    if(err.status==202){
      this.error=true;
      this.error_msg='You already booked the slot'
    }
  })
  }
  // function( dateClickInfo ) { }
}
