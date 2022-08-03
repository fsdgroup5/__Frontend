import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { BookingService } from '../services/booking.service';
import { HallService } from '../services/hall.service';

declare var display: any;
<<<<<<< Updated upstream
declare const duplicate: any;
=======
>>>>>>> Stashed changes
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
<<<<<<< Updated upstream
  onClick() {
    duplicate();
  }
=======
>>>>>>> Stashed changes
  username =localStorage.getItem("username");
  HallsAvailable=[{
    HallName:'',
    Image:'',
  }]
  Booking_Details={
    Hallname:'',
    Date:'',
    Time:'',
    Class:'true',
    Username:this.username
  }
<<<<<<< Updated upstream
  dt:any;

  Time=[{
    Date:'',
    HallName:'',
    TimeSlot:'',
    Class:''
  }]
  
=======
>>>>>>> Stashed changes
 calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    selectable: true,
    editable: true, 
    timeZone: 'local',
    aspectRatio: 2.3,
    // dateClick: this.handleDateClick.bind(this), // bind is important!
    // events: [
    //   { title: 'event 1', date: '2019-04-01' },
    //   { title: 'event 2', date: '2019-04-02' }
    // events: [
    //   { // this object will be "parsed" into an Event Object
    //     title: 'The Title', // a property!
    //     start: '2018-09-01', // a property!
    //     end: '2018-09-02' // a property! ** see important note below about 'end' **
    //   }
    //    ], 
    validRange: function(currentDate) {
      var startDate = new Date(currentDate.valueOf());
       var endDate = new Date(currentDate.valueOf());
      return {
        start: startDate,
        
        end: endDate.setDate(endDate.getDate() + 15)
      };
    },
<<<<<<< Updated upstream
    // visibleRange: function(currentDate){
    //   var startDate = new Date(currentDate.valueOf());
    //   var endDate = new Date(currentDate.valueOf());
    //  return {
    //   start: '2022-0-22',
    //   end: '2020-03-25'
    //  };
    // },
=======
>>>>>>> Stashed changes
   dateClick:  function(info:any) {
     let dateStr=info.dateStr
      display(dateStr);
      
      // alert('Clicked on: ' + info.title);
      // alert('Clicked on: ' + dateStr);
      // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
      // alert('Current view: ' + info.view.type);
      // change the day's background color just for fun
      // info.dayEl.style.backgroundColor = 'red';
    }
    
  };
  constructor(private hallService:HallService,private bookservice:BookingService) { 
   
  }
  
  ngOnInit(): void {
<<<<<<< Updated upstream
    duplicate();
=======
>>>>>>> Stashed changes
    this.hallService.getHall().subscribe((data)=>{
      this.HallsAvailable=JSON.parse(JSON.stringify(data));
  }) 
  }
  Bookhall(){ 
    this.bookservice.Bookhall(this.Booking_Details);
    console.log("Called");    
<<<<<<< Updated upstream
    alert("Successfully booked"+this.Booking_Details.Date);
  }
  checktime(){
    // this.hallService.checktime(this.Booking);
    this.bookservice.getTime(this.Booking_Details.Hallname,this.Booking_Details.Date).subscribe((data)=>{
      this.Time = JSON.parse(JSON.stringify(data));
      console.log(this.Time);
  })
  }
=======
    alert("Successfully booked");
  }

>>>>>>> Stashed changes
  
  // function( dateClickInfo ) { }
}
