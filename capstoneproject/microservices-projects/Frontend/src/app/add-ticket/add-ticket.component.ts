import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

   
  numTickets: number = 1;
  ticket: Ticket[] = [];
  bus_id:number=0;
  message:string='';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ticketService: TicketService 
  ) {}

  ngOnInit(): void {
    this.bus_id = Number(this.route.snapshot.paramMap.get('bus_id'));
    this.generateForms();
  }


  generateForms() {
    this.ticket = Array(this.numTickets).fill(null).map(() => ({
      ticket_id: 0,
      passenger_name: '',
      passenger_age: 0,
      email: '',
      phone: 0,
      gender: '',
      address: '',
      book_seat:this.numTickets,
      bus_id: this.bus_id
    }));
  }



  bookTicket(){

    const requestData={
      bus_id: this.bus_id,
      book_seat:this.numTickets,
      passengers:this.ticket };

    this.ticketService.bookTicket(requestData).subscribe({
      next:(res)=>{this.message='Ticket booked successfully!';
        this.router.navigate(['/user/display_ticket']);
      },
      error:(err)=>{
        this.message="Booking failed. Please try again"
      }
    });
  }  

}
