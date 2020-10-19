import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeserviceService {
  constructor() {}
  getemployees(x: number = 0) {
    return [
      {
        id: 1,
        name: 'Rahul',
        Age: 35,
      },
      {
        id: 2,
        name: 'Yogesh',
        Age: 12,
      },
      {
        id: 3,
        name: 'Bhavya',
        Age: 23,
      },
      {
        id: 4,
        name: 'Akash',
        Age: 35,
      },
      {
        id: 5,
        name: 'Rakesh',
        Age: 35,
      },
    ];
  }
}
