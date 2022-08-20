import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //server_address: string =  'api';
  server_address: string =  "http://localhost:3000/api";
  username:any;
user:any;
  constructor(private http:HttpClient) { }
  loginAdmin(user:any)
  {
    return this.http.post<any>(`${this.server_address}/adminLogin`,user);
  }
  loginUser(user:any)
  {
    return this.http.post<any>(`${this.server_address}/userLogin`,user);
  }
  adminLoggedIn(){
    return (!!localStorage.getItem('token') && !localStorage.getItem('is_user') && localStorage.getItem('isAdmin'))
  }
  userLoggedIn(){
    this.username=localStorage.getItem('username')
    return (!!localStorage.getItem('token') && !!localStorage.getItem('is_user'))
  } 
  getToken()
  {
    return localStorage.getItem('token')
  }
  getisAdmin()
  {
    return localStorage.getItem('isAdmin')
  }
}
