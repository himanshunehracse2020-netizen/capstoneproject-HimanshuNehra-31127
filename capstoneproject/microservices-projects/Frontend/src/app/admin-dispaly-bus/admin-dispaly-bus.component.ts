import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus.model';
import { BusService } from '../bus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dispaly-bus',
  templateUrl: './admin-dispaly-bus.component.html',
  styleUrls: ['./admin-dispaly-bus.component.css']
})
export class AdminDispalyBusComponent implements OnInit{

  buses:Bus[]=[];
    filteredBuses: Bus[] = [];
    searchQuery: string = '';
  
    constructor(private busService : BusService,private router:Router){}
  
    ngOnInit():void{
      this.loadBuses();
  
    }
  
  
    loadBuses(): void {
      this.busService.getbuses().subscribe(data => {
      this.buses = data;
      this.filteredBuses = data; 
      });
    }
  
  
    filterBuses(): void {
      
      if (!this.searchQuery) {
        this.filteredBuses = this.buses;
        return;
      }
      const query = this.searchQuery.toLowerCase();
      this.filteredBuses = this.buses.filter(bus =>
        bus.start.toLowerCase().includes(query)
      );
    }
  
  
  
    addbus(): void {
      this.router.navigate(['/admin/add_bus']);
      }

      updatebus(bus_id:number){
    this.router.navigate(['/admin/update_bus',bus_id]);
  }
  
    }
  
  


