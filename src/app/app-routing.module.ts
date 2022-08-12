import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EditHallComponent } from './edit-hall/edit-hall.component';
import { HallComponent } from './hall/hall.component';
import { HomeComponent } from './home/home.component';
import { NewhallComponent } from './newhall/newhall.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AuthGuard } from './auth.guard';
import { UserbookingComponent } from './userbooking/userbooking.component';
import { CalendarContent } from '@fullcalendar/angular';
import { CalenderComponent } from './calender/calender.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserGuard } from './user.guard';
import { AdminBookingComponent } from './admin-booking/admin-booking.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { UpcomingBookingsComponent } from './upcoming-bookings/upcoming-bookings.component';



const routes: Routes = [
  {path:'AddHall',canActivate:[AuthGuard],component:NewhallComponent},
  {path:'update',canActivate:[AuthGuard],component:EditHallComponent},
  {path:'Halls',canActivate:[AuthGuard],component:HallComponent},
  {path:'',component:HomeComponent},
  {path:'adminLogin',component:AdminLoginComponent},
  {path:'userLogin',component:UserLoginComponent},
  {path:'userbooking',canActivate:[UserGuard],component:UserbookingComponent},
  {path:'calendar',canActivate:[UserGuard],component:CalenderComponent},
  {path:'adminDashboard',canActivate:[AuthGuard],component:AdminDashboardComponent},
  {path :'Adminbooking',canActivate:[AuthGuard],component:AdminBookingComponent},
  {path :'bookingHistory',canActivate:[AuthGuard],component:BookingHistoryComponent},
  {path :'upcomingBookings',canActivate:[AuthGuard],component:UpcomingBookingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
