import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/Reservationt';
import {Stock} from "../models/Stock";
@Injectable({
  providedIn: 'root'
})
export class ReservationService{
private baseUrl = 'http://localhost:8184/api/Reservation'; // Include the API endpoint

constructor(private http: HttpClient) { }

deleteReservation(id: number): Observable<void> {
  return this.http.delete<void>(`${this.baseUrl}/DeleteRes/${id}`);
}

getReservation(): Observable<Reservation[]> {
  return this.http.get<Reservation[]>(this.baseUrl+"/findAllLiv");
}

getReservationById(id: any): Observable<Reservation> {
  return this.http.get<Reservation>(`${this.baseUrl}/${id}`);
}

  addReservation(data: Reservation): Observable<Reservation> {
    const url = `${this.baseUrl}/ajouterRes`;
    return this.http.post<Reservation>(url, data);
  }

updateReservation(data: Reservation, id: number): Observable<Reservation> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.put<Reservation>(url, data);
}
}
