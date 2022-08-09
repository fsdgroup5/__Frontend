import { Component, OnInit } from '@angular/core';
import { HallService } from '../services/hall.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  constructor(private hallService:HallService,private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    
  }
  Addhall(){ 
    this.hallService.Newhall(this.NewHall);
    alert("Success");
    this.router.navigate(['/Halls']);
  }
  
}
