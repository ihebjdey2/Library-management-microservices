import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Emprunt} from "../models/Emprunt";

@Injectable({
  providedIn: 'root'
})
export class EmrpruntService {

  private baseUrl = 'http://localhost:8182/api/Emprunt'; // Include the API endpoint


  constructor(private http: HttpClient) {
  }
  deleteEmprunt(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/DeleteEmp/${id}`);
  }
  getEmprunt(): Observable<Emprunt[]> {
    return this.http.get<Emprunt[]>(`${this.baseUrl}/findAllF`);
  }

  getEmpruntById(id: any): Observable<Emprunt> {
    return this.http.get<Emprunt>(`${this.baseUrl}/findAllF`)
  }
  addEmprunt(data: Emprunt): Observable<Emprunt> {
    const url = `${this.baseUrl}/ajouterEmprunt`;
    return this.http.post<Emprunt>(url, data);
  }
  updateEmprunt(
    data: Emprunt,
    id: number
  ): Observable<Emprunt> {
    // Construct the URL without joining idBloc
    const url = `${this.baseUrl}/UpdateEmprunt/${id}`;

    return this.http.put<Emprunt>(url, data);
  }
}
