import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  User={username:'',
  password:''};

  constructor(private _auth: AuthService, private _router:Router) { }
  loginAdmin()
  {
    this._auth.loginAdmin(this.User)
    .subscribe(
      res=>{
        localStorage.setItem('token',res.token)
        this._router.navigate(['/Halls'])
      }
    )

  }

  ngOnInit(): void {
  }

}
