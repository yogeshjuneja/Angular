import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css'],
})
export class EmployeedetailsComponent implements OnInit {


  public employees = [];
  public errmsg = "";
  public employeeid;
  filteremployeebyid;
  constructor(private empservice: EmployeeserviceService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    //this.employeeid = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe(params => {
      this.employeeid = params.get('id');
    });
    this.empservice.getemployees().subscribe(
      d => this.employees = d,
      error => this.errmsg = error);



  }
}
