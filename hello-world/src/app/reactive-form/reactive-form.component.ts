import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  // registrationForm = new FormGroup({
  //   username: new FormControl(),
  //   password: new FormControl(''),
  //   confirmpassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     pin: new FormControl('')
  //   })

  // });
  registrationForm = this.fb.group({
    username: ['Yogesh', [Validators.required, Validators.minLength(3)]],
    password: ['pass'],
    confirmpassword: ['pass'],
    address: this.fb.group({
      city: [''],
      state: [''],
      pin: ['']
    })

  });
  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
  }

  LoadAPI() {
    this.registrationForm.patchValue({
      username: 'Yogesh Juneja',
      password: '123456',
      confirmpassword: '123456',
      address: {
        city: 'Gurgaon',
        state: 'Haryana',
        pin: 122016

      }


    });
  }

}
