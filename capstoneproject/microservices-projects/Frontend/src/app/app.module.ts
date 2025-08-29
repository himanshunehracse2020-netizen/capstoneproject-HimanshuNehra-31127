import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { DisplayTicketComponent } from './display-ticket/display-ticket.component';
import { DisplayBusComponent } from './display-bus/display-bus.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { AdminDispalyBusComponent } from './admin-dispaly-bus/admin-dispaly-bus.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { LoginsComponent } from './logins/logins.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTicketComponent,
    DisplayTicketComponent,
    DisplayBusComponent,
    UserloginComponent,
    AddBusComponent,
    AdminloginComponent,
    ViewDetailsComponent,
    AdminDispalyBusComponent,
    UpdateBusComponent,
    LoginsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
