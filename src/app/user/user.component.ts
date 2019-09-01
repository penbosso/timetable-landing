import { UserService } from './user.service';
import { AuthService } from './auth.service';
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
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm: FormGroup;
  user = new User();
  errorMessage: any;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) { }

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

  save(): void {
    const newUser = {...this.user, ...this.userForm.value};
    newUser.password = this.userForm.value.passwordGroup.password;

    this.userService.createUser(newUser).subscribe(
      () => this.onSaveComplete(),
      (error: any) => this.errorMessage = <any>error
    );
    console.log('new user',newUser);
    console.log('Saved: ' + JSON.stringify(this.userForm.value));
  }

  onSaveComplete(): void {
    this.userForm.reset();
    this.router.navigate(['/']);
  }

}
