import { Iemployee } from './employee';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeeserviceService {
  private url: string = "/assets/data/employees1.json";
  constructor(private http: HttpClient) { }


  getemployees(): Observable<Iemployee[]> {
    return this.http.get<Iemployee[]>(this.url).pipe(
      catchError(this.errorhandling));

  }




  errorhandling(error) {
    return throwError(error.message || 'Server Error');

  }
}
