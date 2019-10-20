import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Class Schedule TimeTable';
  constructor(public auth:AuthService, private router: Router) {}

  logout() {
    this.auth.logout()
    this.router.navigate(['/'])
  }
}
