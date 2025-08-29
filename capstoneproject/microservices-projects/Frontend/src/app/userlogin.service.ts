import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import {Observable } from 'rxjs';
import { User } from "./userlogin.model";


@Injectable({
    providedIn: 'root'
})

export class UserService {
    private url = "http://localhost:5000/api";

    constructor(private http:HttpClient) { }

    getusers() : Observable<User[]>{
    return this.http.get<User[]>(`${this.url}/userlogin`);}

    adduser(user: User) : Observable<any>{
    return this.http.post<any>(`${this.url}/userlogin`, user);}
}