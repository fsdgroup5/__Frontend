import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';


@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  
 

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    selectable: true,
    editable: true, 
    timeZone: 'local',
    
    // dateClick: this.handleDateClick.bind(this), // bind is important!
    // events: [
    //   { title: 'event 1', date: '2019-04-01' },
    //   { title: 'event 2', date: '2019-04-02' }
    events: [
      { // this object will be "parsed" into an Event Object
        title: 'The Title', // a property!
        start: '2018-09-01', // a property!
        end: '2018-09-02' // a property! ** see important note below about 'end' **
      }
       ],
    dateClick: function(info:any) {
      alert('Clicked on: ' + info.title);
      alert('Clicked on: ' + info.dateStr);
      // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
      // alert('Current view: ' + info.view.type);
      // change the day's background color just for fun
      // info.dayEl.style.backgroundColor = 'red';
    }
    
  };

  handleDateClick(arg :any) {
    alert('date click! ' + arg.dateStr)
  }
  constructor() { }

  ngOnInit(): void {
  
  }
  // function( dateClickInfo ) { }
}
