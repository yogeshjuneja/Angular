import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css'],
})
export class EmployeedetailsComponent implements OnInit {
  public employees = [];
  constructor(private empservice: EmployeeserviceService) {}

  ngOnInit(): void {
    this.employees = this.empservice.getemployees();
  }
}
