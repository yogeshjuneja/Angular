import { catchError } from 'rxjs/operators';
import { Userinfo } from './../userinfo';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  url = '';
  constructor(private client: HttpClient) { }




  enroll(user: Userinfo) {
    return this.client.post<any>(this.url, user)
      .pipe(catchError(this.handleerror));


  }

  handleerror(error: HttpErrorResponse) {
    return throwError(error);
  }

}
