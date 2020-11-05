import { EnrollmentService } from './../Services/enrollment.service';
import { Userinfo } from './../userinfo';
import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-tdfforms',
  templateUrl: './tdfforms.component.html',
  styleUrls: ['./tdfforms.component.css']
})
export class TdfformsComponent implements OnInit {

  topics = ['Angular', 'React', 'Vue', 'Node', 'Coffee'];
  usermodel = new Userinfo('Rob', 'Rob@test.com', 9876545365, '', '', true);
  haserror: boolean = true;
  errmsg = '';


  topicchange(value) {

    this.haserror = (value === 'default');


  }
  constructor(private erollmentservice: EnrollmentService) { }

  ngOnInit(): void {


  }


  onSubmit() {

    alert('hello');
    this.erollmentservice.enroll(this.usermodel).subscribe(
      data => data,
      error => this.errmsg = error.statusText);



  }

}
