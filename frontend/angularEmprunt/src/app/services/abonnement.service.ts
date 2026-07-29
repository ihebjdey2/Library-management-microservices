import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Abonnement } from '../models/Abonnement';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {

  private baseUrl = 'http://localhost:8009/abonnement'; // Include the API endpoint


  constructor(private http: HttpClient) {
  }
  deleteEmprunt(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  getEmprunt(): Observable<Abonnement[]> {
    return this.http.get<Abonnement[]>(`${this.baseUrl}`);
  }

  getEmpruntById(id: any): Observable<Abonnement> {
    return this.http.get<Abonnement>(`${this.baseUrl}`)
  }
  addEmprunt(data: Abonnement): Observable<Abonnement> {
    const url = `${this.baseUrl}`;
    return this.http.post<Abonnement>(url, data);
  }
  updateEmprunt(data: Abonnement,id: number): Observable<Abonnement> {
    // Construct the URL without joining idBloc
    const url = `${this.baseUrl}/${id}`;
    console.log(data) 

    return this.http.put<Abonnement>(url, data);
  }
}
