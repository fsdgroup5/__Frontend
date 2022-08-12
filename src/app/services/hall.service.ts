import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class HallService {
  //server_address: string =  'api';
  server_address: string = "http://localhost:3000/api";
  hall_exist:any

  Halldetails = {
    HallName: "",
    Seats: "",
    Location: "",
    Image: ""
  }
  constructor(private http: HttpClient, private router:Router) { }
  getHalls(id: any) {
    return this.http.get(`${this.server_address}/halls/update` + id);
  }
  getHall() {
    return this.http.get(`${this.server_address}/halls/halldetails`)
  }

  Newhall(Halldetails: any) {
    return this.http.post(`${this.server_address}/halls/addnewhall`, { "Hall": Halldetails })
      .subscribe(data => { console.log(data) }
        , err => {
          if (err.status == 200) {
            alert('success')
            this.router.navigate(['/Halls']);
            // this.error1=false;
          }
          if (err.status == 401) {
            this.hall_exist = true
            setTimeout(() => {
              this.hall_exist = false
            }, 3000)
            // alert('hall name already exist')
            // this.error1=false;
          }
        })
  }
  removeHall(id: any) {
    return this.http.delete(`${this.server_address}/halls/removehall` + id)

  }

  editHall(id: any) {
    console.log('client update')
    return this.http.put(`${this.server_address}/halls/update`, id)
      .subscribe(data => { console.log(data) })
  }

}
