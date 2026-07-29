import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Livre} from "../models/Livre";
import {Emprunt} from "../models/Emprunt";

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  private baseUrl = 'http://localhost:8183/api/Livre'; // Include the API endpoint


  constructor(private http: HttpClient) {
  }
  deleteLivre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/DeleteLivre/${id}`);
  }
  getLivre(): Observable<Livre[]> {
    return this.http.get<Livre[]>(`${this.baseUrl}/findAllLiv`);
  }
  getLivreById(id: any): Observable<Livre> {
    return this.http.get<Livre>(`${this.baseUrl}/findLivre`)
  }

  addLivre(data: Livre): Observable<Livre> {
    const url = `${this.baseUrl}/ajouterLivre`;
    return this.http.post<Livre>(url, data);
  }
  updateEmprunt(
    data: Livre,
    id: number
  ): Observable<Livre> {
    // Construct the URL without joining idBloc
    const url = `${this.baseUrl}/UpdateLivre/${id}`;

    return this.http.put<Livre>(url, data);
  }
}
