import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import {Observable } from 'rxjs';
import { Bus } from "./bus.model";


@Injectable({
    providedIn: 'root'
})

export class BusService {
    private url = "http://localhost:5000/api/bus";

    constructor(private http:HttpClient) { }

    getbuses() : Observable<Bus[]>{
    return this.http.get<Bus[]>(`${this.url}`);}

    addbus(bus: Bus) : Observable<any>{
    return this.http.post<any>(`${this.url}`,bus);}

    getBusDetails(bus_id: number) : Observable<any>{
    return this.http.get<any>(`${this.url}/${bus_id}`);}
      
   updateBus(bus_id: number, bus: Bus): Observable<any> {
    return this.http.put<any>(`${this.url}/${bus_id}`, bus);}
  
    deletebus(bus_id:number) : Observable<any>{
    return this.http.delete<any>(`${this.url}/${bus_id}`);}



    }




