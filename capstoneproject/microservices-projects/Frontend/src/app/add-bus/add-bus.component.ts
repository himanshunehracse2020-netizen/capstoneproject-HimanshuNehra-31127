import { Component} from '@angular/core';
import { Bus } from '../bus.model';
import { BusService } from '../bus.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent  {
  bus : Bus = {
    bus_id:0,
    start:'',
    destination:'',
    image:'',
    ratings:0,
    departureTime:'',
    date:'',
    seats:0,
    price:0
   };

   constructor(private busservice : BusService ,private router:Router,private route: ActivatedRoute){}

  addBus(){
    
    this.busservice.addbus(this.bus).subscribe({
      next:(res)=>
        {this.router.navigate(['/admin/admin_display_bus'])},
      error:(err)=>
        {console.error(err);}
      })

}
}
