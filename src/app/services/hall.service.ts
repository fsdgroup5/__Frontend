import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HallService {
  Halldetails={
    HallName:"",
    Seats:"",
    Location:"",
    Image:""
  }
  constructor( private http:HttpClient ) { }
  getHalls(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  getHall(){
    return this.http.get("http://localhost:3000/Halls")
  }

  Newhall(Halldetails:any){
    return this.http.post("http://localhost:3000/insert",{"Hall":Halldetails})
    .subscribe(data=>{console.log(data)})
   }
   removeHall(id:any)
   {
     return this.http.delete("http://localhost:3000/remove/"+id)
 
   }
   
   editHall(id:any){
      console.log('client update')
      return this.http.put("http://localhost:3000/update",id)
      .subscribe(data =>{console.log(data)})
   }

}
