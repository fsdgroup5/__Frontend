import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  error_msg:any;

  User={username:'',
  password:''};

  constructor(private _auth: AuthService, private _router:Router) { }
  loginAdmin()
  {
    this._auth.loginAdmin(this.User)
    .subscribe(
      res=>{
        localStorage.setItem('token',res.token)
        localStorage.setItem('isAdmin',res.isAdmin)
        this._router.navigate(['/adminDashboard'])
      }
      ,err=>{
        this.error_msg=true
        setTimeout(()=>{this.error_msg=false},4000)
      }
    )

  }

  ngOnInit(): void {
  }

}
