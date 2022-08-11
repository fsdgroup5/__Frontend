import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HallService {
  //server_address: string =  'api';
  server_address: string =  "http://localhost:3000/api";

  Halldetails={
    HallName:"",
    Seats:"",
    Location:"",
    Image:""
  }
  constructor( private http:HttpClient ) { }
  getHalls(id:any){
    return this.http.get(`${this.server_address}/halls/update`+id);
  }
  getHall(){
    return this.http.get(`${this.server_address}/halls/halldetails`)
  }

  Newhall(Halldetails:any){
    return this.http.post(`${this.server_address}/halls/addnewhall`,{"Hall":Halldetails})
    .subscribe(data=>{console.log(data)})
   }
   removeHall(id:any)
   {
     return this.http.delete(`${this.server_address}/halls/removehall`+id)
 
   }
   
   editHall(id:any){
      console.log('client update')
      return this.http.put(`${this.server_address}/halls/update`,id)
      .subscribe(data =>{console.log(data)})
   }

}
