import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //server_address: string =  'api';
  //server_address: string =  "http://localhost:3000";
user:any;
  constructor(private http:HttpClient) { }
  loginAdmin(user:any)
  {
    return this.http.post<any>("http://localhost:3000/adminLogin",user);
  }
  loginUser(user:any)
  {
    return this.http.post<any>("http://localhost:3000/userLogin",user);
  }
  adminLoggedIn(){
    return (!!localStorage.getItem('token') && !localStorage.getItem('is_user'))
  }
  userLoggedIn(){
    return (!!localStorage.getItem('token') && !!localStorage.getItem('is_user'))
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
}
