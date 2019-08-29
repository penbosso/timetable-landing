import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, AbstractControl} from '@angular/forms';

import { User } from './user';

function confirmPassword(c: AbstractControl): {[key: string]: boolean } | null {
  let confirmControl = c.get('confirmPassword');
  let passwordControl = c.get('password');

  if (confirmControl.pristine || passwordControl.pristine) {
    return null;
  }

  if (passwordControl.value !== confirmControl.value) {
    return { 'match': true};
  }
  return null;
}

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
      passwordGroup: this.fb.group({
        password: '',
        confirmPassword: ''
      }, {validator: confirmPassword})
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
