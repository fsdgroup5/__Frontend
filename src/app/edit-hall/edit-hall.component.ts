import { Component, OnInit } from '@angular/core';
import { HallService } from '../services/hall.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-hall',
  templateUrl: './edit-hall.component.html',
  styleUrls: ['./edit-hall.component.css']
})
export class EditHallComponent implements OnInit {
  Hall={
    HallName:'',
    Seats:'',
    Location:'',
    Image:''
  }
  constructor(private hallService:HallService, private router:Router) { }

  ngOnInit(): void {
    let _id = localStorage.getItem("editProductId");
    this.hallService.getHalls(_id).subscribe((data)=>{
      this.Hall=JSON.parse(JSON.stringify(data));
  })
}
  editHall()
  {    
    this.hallService.editHall(this.Hall);   
    alert("Success");
    this.router.navigate(['Halls']);
  }

}
