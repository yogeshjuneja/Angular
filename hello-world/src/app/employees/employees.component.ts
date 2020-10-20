import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  public  employees = [];
  constructor(private empservice: EmployeeserviceService) {}

  ngOnInit() {
   this.empservice.getemployees().subscribe(data =>
    {
      this.employees = data;
    });
  }
}


