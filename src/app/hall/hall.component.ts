import { Component, OnInit } from '@angular/core';
import { HallService } from '../services/hall.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {
  Halls=[{
    HallName:'',
    Seats:'',
    Location:'',
    Image:''
  }]
  constructor(private hallService:HallService, private router:Router) {
    
   }

  ngOnInit(): void {
    this.hallService.getHall().subscribe((data)=>{
      this.Halls=JSON.parse(JSON.stringify(data));
  })
  }
  deleteHall(hall:any)
  {
    this.hallService.removeHall(hall._id)
      .subscribe((data) => {
        this.Halls = this.Halls.filter(p => p !== hall);
      })
  }
  editHall(hall:any)
  {
    localStorage.setItem("editProductId", hall._id.toString());
    this.router.navigate(['update']);

  }
}
