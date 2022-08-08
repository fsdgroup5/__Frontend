import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  constructor(public _auth:AuthService,
    private _router:Router) { }
  title: String="ICTAK Hall Booking Portal"

 

  ngOnInit(): void {
    let is_user =localStorage.getItem('is_user');
  }
  is_user(){

    if(!!localStorage.getItem('is_user'))
    return true
    else 
    return false
  }

  logoutUser(){
    localStorage.removeItem('token')
    localStorage.removeItem('username');
    localStorage.removeItem('is_user')
    this._router.navigate([''])
  }

  logoutAdmin()
  {
    localStorage.removeItem('token')
    localStorage.removeItem('isAdmin')
    this._router.navigate([''])
  }
}
