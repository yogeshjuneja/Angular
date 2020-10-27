import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  public employees = [];
  public errmsg = "";
  constructor(private empservice: EmployeeserviceService, private router: Router, private activateroute: ActivatedRoute) { }

  ngOnInit() {
    this.empservice.getemployees().subscribe(data => this.employees = data, error => this.errmsg = error);


  }

  ChildRoute() {
    this.router.navigate(['childroute'], { relativeTo: this.activateroute })
  }


  redirecttoemployes(emp) {
    this.router.navigate(['/employee-detail', emp.id]);
  }
}


