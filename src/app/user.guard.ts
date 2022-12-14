import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private _auth:AuthService,
    private _router:Router) {

}
  canActivate():boolean{
    if(this._auth.userLoggedIn()){
        return true
    }
    else{
        this._router.navigate(['userLogin'])
        return false
    }
  }
  
}
