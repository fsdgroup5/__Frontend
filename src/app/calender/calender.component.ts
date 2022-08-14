import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { Router } from '@angular/router';
import timeGridPlugin from '@fullcalendar/timegrid';
import { BookingService } from '../services/booking.service';
import { HallService } from '../services/hall.service';
import * as $ from 'jquery';
import { DayGridView } from '@fullcalendar/daygrid';
import * as e from 'express';

declare var display: any;
declare const setCalendar: any;
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
 
  posts=[{
  }]
  

  handleDateClick(arg:any) {
  const then = new Date(arg.dateStr);

const today = new Date();


today.setDate(today.getDate());

const msBetweenDates = Math.abs(then.getTime() - today.getTime());
const daysBetweenDates = msBetweenDates / (24 * 60 * 60 * 1000);
var date=arg.date
today.setHours(0, 0, 0, 0);

if (daysBetweenDates < 15 && date > today) {
  display(arg.dateStr);
  this.error=false;
  this.error_msg=''
} else {
 alert('select a date between 15 days')
}
this.Booking_Details.Date=arg.dateStr.toString();
  }
 calendarOptions: CalendarOptions = {
  plugins: [ timeGridPlugin ],
    initialView: 'dayGridMonth',
    selectable: true,
    editable: false, 
    timeZone: 'Asia/Kolkata',
    aspectRatio: 1.35,
    
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'timeGridWeek,dayGridMonth,timeGridDay'
    },
    views: {
     
      dayGridMonth:{
        dayMaxEventRows :2, 
        dateClick: this.handleDateClick.bind(this),
      },
      
      timeGridWeek: {
        type: 'timeGrid',
        slotMinTime:'09:00:00',
        slotMaxTime:'18:00:00',
        expandRows:true,
      },
      timeGridDay: {
        type: 'timeGrid',
        slotMinTime:'09:00:00',
        slotMaxTime:'18:00:00',
        expandRows:true,
      }
    },
    
    eventTimeFormat:{
      hour: 'numeric',
      minute: '2-digit',
      meridiem: 'short'
    },
    slotDuration: '01:00',
    defaultRangeSeparator:'-',
    eventSources: [
      
      // your event source
      {
        url: 'http://localhost:3000/api/booking/events/'+this.username, 
      }
  
    ]
  };
  constructor(private hallService:HallService,private bookservice:BookingService,private router:Router ) { 
   
  }
  
  ngOnInit(): void {
    $(document).ready(function() { 
      $('.fc-button').click(function() { 
        setCalendar();
      })
      setCalendar();
    })
   

    this.bookservice.getEvents(this.username).subscribe((data)=>{
      this.posts=JSON.parse(JSON.stringify(data));
      console.log(this.posts)
  }) 
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

    
var Time=this.Booking_Details.Time; 
var date=new Date()
var today = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString(); 
var StartTime = Time.substring(0, 8);
var givenDate2 =  this.Booking_Details.Date+'T' + StartTime + 'Z'
if(today > givenDate2){
  this.error=true;
  this.error_msg='timeslot not available'
}
else{
  this.bookservice.getTime(this.Booking_Details.Hallname,this.Booking_Details.Date,this.Booking_Details.Time,this.username).subscribe((data)=>{
    this.Time = JSON.parse(JSON.stringify(data));
},
err=>{
  if(err.status==200){
    this.error=false;
    // this.error1=false;
  }
  if(err.status==404){
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
}



    
  // function( dateClickInfo ) { }
}
