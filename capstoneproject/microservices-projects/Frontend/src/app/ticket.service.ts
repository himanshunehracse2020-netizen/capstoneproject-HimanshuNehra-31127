import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import {Observable } from 'rxjs';
import { Ticket } from "./ticket.model";


@Injectable({
    providedIn: 'root'
})

export class TicketService {
    private url = "http://localhost:5000/api/tickets";

    constructor(private http:HttpClient) { }

    getTicket() : Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.url);}

    bookTicket(data:any) : Observable<any>{
    return this.http.post<any>(this.url,data);}

    getTicketById(ticketId: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.url}/${ticketId}`);}
                                               

    deleteTicket(ticket_id:number) : Observable<any>{
    return this.http.delete<any>(`${this.url}/${ticket_id}`);}



    }




