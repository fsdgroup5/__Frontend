import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //server_address: string =  'api';
  //server_address: string =  "http://localhost:3000";

  constructor(private http:HttpClient) { }
  loginAdmin(user:any)
  {
    return this.http.post<any>("http://localhost:3000/adminLogin",user);
  }
  loginUser(user:any)
  {
    return this.http.post<any>("http://localhost:3000/userLogin",user);
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
}
