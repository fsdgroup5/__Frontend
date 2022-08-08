import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  User={username:'',
  password:''};
  error_msg:any;

  constructor(private _auth: AuthService, private _router:Router) { }
    loginUser()
  {
    this._auth.loginUser(this.User)
    .subscribe(
      res=>{
        localStorage.setItem('token',res.token)
        localStorage.setItem("username", this.User.username.toString());
        localStorage.setItem('is_user','true');
        this._router.navigate(['/userbooking']);
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
