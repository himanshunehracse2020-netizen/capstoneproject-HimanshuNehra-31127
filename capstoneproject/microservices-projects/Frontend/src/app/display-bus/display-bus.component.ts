import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus.model';
import { BusService } from '../bus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-bus',
  templateUrl: './display-bus.component.html',
  styleUrls: ['./display-bus.component.css']
})
export class DisplayBusComponent implements OnInit{
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



  bookTicket(bus_id: number): void {
    this.router.navigate(['/user/add_ticket', bus_id]);
    }

  }

