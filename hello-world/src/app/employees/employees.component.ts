import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  public employees = [];
  constructor(private empservice: EmployeeserviceService) {}

  ngOnInit(): void {
    this.employees = this.empservice.getemployees();
  }
}
