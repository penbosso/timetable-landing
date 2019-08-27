import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';

import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm: FormGroup;
  user = new User();

  constructor(public router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      otherName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  }

  save() {
    console.log(this.userForm);
    console.log('Saved: ' + JSON.stringify(this.userForm.value));
  }

  authenticate() {
    console.log(this.userForm);
    console.log('Authenticate: ' + JSON.stringify(this.userForm.value));
  }

}
