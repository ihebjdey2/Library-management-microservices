import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/Stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseUrl = 'http://localhost:8008/api/Stock'; // Include the API endpoint


  constructor(private http: HttpClient) {
  }
  deleteEmprunt(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deletestock/${id}`);
  }
  getEmprunt(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseUrl}/getallstock`);
  }

  getEmpruntById(id: any): Observable<Stock> {
    return this.http.get<Stock>(`${this.baseUrl}`)
  }
  addEmprunt(data: Stock): Observable<Stock> {
    const url = `${this.baseUrl}/addstock`;
    return this.http.post<Stock>(url, data);
  }
  updateEmprunt(data: Stock,id: number): Observable<Stock> {
    // Construct the URL without joining idBloc
    const url = `${this.baseUrl}/updatestock/${id}`;
    console.log(data)

    return this.http.put<Stock>(url, data);
  }
}
