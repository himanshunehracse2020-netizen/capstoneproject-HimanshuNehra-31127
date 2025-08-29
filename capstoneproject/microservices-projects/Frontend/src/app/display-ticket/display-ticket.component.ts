import { Component } from '@angular/core';
import { Ticket } from '../ticket.model';
import { TicketService } from '../ticket.service';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';
import { ActivatedRoute } from '@angular/router'
import { BuiltinTypeName } from '@angular/compiler';
import { Bus } from '../bus.model';

@Component({
  selector: 'app-display-ticket',
  templateUrl: './display-ticket.component.html',
  styleUrls: ['./display-ticket.component.css']
})
export class DisplayTicketComponent {
    tickets:Ticket[]=[];
    
  
    
    filteredtickets : Ticket[] = [];
    searchQuery: string = '';
    selectedBus:any = null;
  
    constructor(private ticketService : TicketService,private busService : BusService,private router:Router,private route: ActivatedRoute){}
  
    ngOnInit():void{
      this.loadTickets();
  
    }
  
  
    loadTickets(): void {
      this.ticketService.getTicket().subscribe(data => {
      this.tickets = data;
      this.filteredtickets = data; 
      });
      
    }
  
  
    filterTickets(): void {
      
      if (!this.searchQuery) {
        this.filteredtickets = this.tickets;
        return;
      }
      const query = this.searchQuery.toLowerCase();
      this.filteredtickets = this.tickets.filter(ticket =>
        ticket.passenger_name.toLowerCase().includes(query)
      );
    }

    cancelTicket(ticket_id:number){
      this.ticketService.deleteTicket(ticket_id).subscribe((res:any)=>{this.loadTickets();},
      error=>{console.error(error);});
    }
    
    
    viewDetails(ticket_id: number): void {
    this.router.navigate(['/user/view-details', ticket_id]);
    }
    
      
    }

