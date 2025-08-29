import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { DisplayBusComponent } from './display-bus/display-bus.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { DisplayTicketComponent } from './display-ticket/display-ticket.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { AdminDispalyBusComponent } from './admin-dispaly-bus/admin-dispaly-bus.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { LoginsComponent } from './logins/logins.component';

const routes: Routes = [
    {path:'user/add_ticket/:bus_id',component: AddTicketComponent},
    {path:'user/display_ticket',component: DisplayTicketComponent},
    {path:'admin/add_bus',component: AddBusComponent},
    {path:'admin/update_bus/:bus_id',component: UpdateBusComponent},
    {path:'user/display_bus',component: DisplayBusComponent},
    {path:'login/adminlogin',component: AdminloginComponent},
    {path:'login/userlogin',component: UserloginComponent},
    {path:'',component: LoginsComponent},
    {path:'user/view-details/:ticket_id',component: ViewDetailsComponent},
    {path:'admin/admin_display_bus',component: AdminDispalyBusComponent},
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
