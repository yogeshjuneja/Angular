import { Iemployee } from './employee';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeserviceService {
  private url : string = "/assets/data/employees.json";
  constructor(private http: HttpClient) {}


  getemployees(): Observable<Iemployee[]> {
    return this.http.get<Iemployee[]>(this.url);
  }
}
