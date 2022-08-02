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

const routes: Routes = [
  {path:'AddHall',canActivate:[AuthGuard],component:NewhallComponent},
  {path:'update',canActivate:[AuthGuard],component:EditHallComponent},
  {path:'Halls',canActivate:[AuthGuard],component:HallComponent},
  {path:'',component:HomeComponent},
  {path:'adminLogin',component:AdminLoginComponent},
  {path:'userLogin',component:UserLoginComponent},
  {path:'userbooking',component:UserbookingComponent},
  {path:'calendar',component:CalenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
