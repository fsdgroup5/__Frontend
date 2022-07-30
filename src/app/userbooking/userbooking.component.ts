import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userbooking',
  templateUrl: './userbooking.component.html',
  styleUrls: ['./userbooking.component.css']
})
export class UserbookingComponent implements OnInit {

  pageTitle: string = ` My Booking Details`;

  bookingdtls=[{
    UserName :'',
    UserMailId:'',
    HallName:'',
    DateOfBooking:'',
    TimeSlot:'',
    Status:''
   }]
  constructor(private bookingservice:BookingService ,private router:Router) { }

  ngOnInit(): void {
    
    this.bookingservice.getDetails().subscribe((data)=>{
      this.bookingdtls=JSON.parse(JSON.stringify(data));
  })
  }
  editBooking (bookingdtls:any){}

  deleteBooking (bookingdtls:any){}

}








 
//   editProduct(product:any)
//   {
//     localStorage.setItem("editProductId", product._id.toString());
//     this.router.navigate(['update']);

//   }
//   deleteProduct(product:any)
//   {
//     this.productService.deleteProduct(product._id)
//       .subscribe((data) => {
//         this.products = this.products.filter(p => p !== product);
//       })
  

//   }
// }
  