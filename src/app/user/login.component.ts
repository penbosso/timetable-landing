import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  login() {
    console.log('Login: ' + JSON.stringify(this.userForm.value));
    const val = this.userForm.value;

    if (val.email && val.password) {
      this.authService.login(val.email,val.password)
          .subscribe(
            () => {
              console.log("User is logged in");
              this.router.navigateByUrl('/');
            }
          );
    }
  }
}
