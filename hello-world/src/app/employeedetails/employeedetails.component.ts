import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css'],
})
export class EmployeedetailsComponent implements OnInit {
  public employees = [];
  public errmsg = "";
  constructor(private empservice: EmployeeserviceService) { }

  ngOnInit(): void {
    this.empservice.getemployees().subscribe(
      d => this.employees = d,
      error => this.errmsg = error);
  }
}
