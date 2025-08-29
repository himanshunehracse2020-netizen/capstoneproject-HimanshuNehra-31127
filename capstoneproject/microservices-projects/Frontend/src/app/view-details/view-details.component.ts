import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';
import { Ticket } from '../ticket.model';
import { ActivatedRoute } from '@angular/router'
import { TicketService } from '../ticket.service';
import { Bus } from '../bus.model';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit{
  ticket: Ticket|null=null;
  bus:Bus|null=null;

  constructor(private ticketService : TicketService,private busservice:BusService,private router:Router,private route: ActivatedRoute){}


  ngOnInit(): void {
    
    const ticket_id = Number(this.route.snapshot.paramMap.get('ticket_id'));
    
    console.log("ticket",ticket_id)
      if (ticket_id) {
        this.loadTickets(ticket_id);
      }
    
  }

  loadTickets(ticket_id: number) {
  this.ticketService.getTicketById(ticket_id).subscribe({
    next: (res) => {
      console.log("Ticket response:", res);
      this.ticket = res;

      
      if (this.ticket && this.ticket.bus_id) {
        this.busservice.getBusDetails(this.ticket.bus_id).subscribe({
          next: (busRes) => {
            console.log("Bus response:", busRes);
            this.bus = busRes[0];   
          },
          error: (err) => console.error("Bus fetch error:", err)
        });
      }
    },
    error: (err) => console.error("Ticket fetch error:", err)
  });
}
      
      
      }




