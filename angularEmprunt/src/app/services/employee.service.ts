import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Employee } from "../models/Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8088/api/Employee'; // Include the API endpoint

  constructor(private http: HttpClient) {}

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/DeleteEmp/${id}`);
  }

  findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/findAllEmployees`);
  }

  findById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/findEmployeeById/${id}`);
  }

  save(data: Employee): Observable<Employee> {
    const url = `${this.baseUrl}/addEmployee`;
    return this.http.post<Employee>(url, data);
  }

  update(data: Employee): Observable<Employee> {
    const url = `${this.baseUrl}/updateEmployee/${data.employeeId}`;
    return this.http.put<Employee>(url, data);
  }
}