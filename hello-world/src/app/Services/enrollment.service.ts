import { Userinfo } from './../userinfo';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  url = '';
  constructor(private client: HttpClient) { }
  enroll(user: Userinfo) {
    return this.client.post(this.url, user);


  }

}
