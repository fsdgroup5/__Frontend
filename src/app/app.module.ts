import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewhallComponent } from './newhall/newhall.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { HallComponent } from './hall/hall.component';
import { HeaderComponent } from './header/header.component';
import { EditHallComponent } from './edit-hall/edit-hall.component';
import { FooterComponent } from './footer/footer.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component'; 
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { UserbookingComponent } from './userbooking/userbooking.component';
import { CalenderComponent } from './calender/calender.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminBookingComponent } from './admin-booking/admin-booking.component';
import { FilterPipe } from './filter.pipe';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApiService } from './service/api.service';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
 ]
);


@NgModule({
  declarations: [
    AppComponent,
    NewhallComponent,
    HallComponent,
    HeaderComponent,
    EditHallComponent,
    FooterComponent,
    AdminLoginComponent,
    UserLoginComponent,
    HomeComponent,
    UserbookingComponent,
    CalenderComponent,
    AdminDashboardComponent,
    AdminBookingComponent,
    FilterPipe,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule,
    ReactiveFormsModule  
  ],
  providers: [ApiService,AuthService,  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
