import { Component, OnInit } from '@angular/core';
import { HallService } from '../services/hall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newhall',
  templateUrl: './newhall.component.html',
  styleUrls: ['./newhall.component.css']
})
export class NewhallComponent implements OnInit {
  images:any;
  NewHall={
    HallName:'',
    Seats:'',
    Location:'',
    Image:''
  }
  constructor(public hallService:HallService,private router:Router) { }

  ngOnInit(): void {
    
  }
  Addhall(){ 
    this.hallService.Newhall(this.NewHall);
    // alert("Success");
    // this.router.navigate(['/Halls']);
  }
  
}
