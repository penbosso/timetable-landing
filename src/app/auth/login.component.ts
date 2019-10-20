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
  errorMessage: any;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: '',
      password: ''
    });

    this.authService.eventAuthError$.subscribe( data => {
      this.errorMessage = data; console.log(this.errorMessage);
    });
  }

  login() {
    console.log('Login: ' + JSON.stringify(this.userForm.value));
    const val = this.userForm.value;

    if (val.email && val.password) {
      this.authService.login(val.email,val.password)
          .subscribe( success => {
            if (success) {
              this.router.navigateByUrl('/schedule');
            }
          });
    }
  }
}
