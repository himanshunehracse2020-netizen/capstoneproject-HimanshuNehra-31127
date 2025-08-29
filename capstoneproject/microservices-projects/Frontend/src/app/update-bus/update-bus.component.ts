import { Component,OnInit } from '@angular/core';
import { Bus } from '../bus.model';
import { BusService } from '../bus.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-bus',
  templateUrl: './update-bus.component.html',
  styleUrls: ['./update-bus.component.css']
})
export class UpdateBusComponent implements OnInit {
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



  ngOnInit(){
    const bus_id = Number(this.route.snapshot.paramMap.get('bus_id'));
    console.log( "id" ,bus_id)
    this.busservice.getbuses().subscribe(buses=>{
      const found=buses.find(m => m.bus_id===bus_id);
      if (found){
      this.bus=found;}
    });
  }

  updatebus(){
    console.log(this.bus.bus_id)
    this.busservice.updateBus(this.bus.bus_id,this.bus).subscribe(()=>{
      this.router.navigate(['/admin/admin_display_bus']);
        });
  }
}

