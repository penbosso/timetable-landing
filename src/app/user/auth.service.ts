import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import * as moment from "moment"
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'https://cstt.herokuapp.com/auth';
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<User>(this.authUrl, {email, password})
          .pipe(tap(res => this.setSession(res)));
  }

  private setSession(authResult) {
    const expiresAt = '36000';
    localStorage.setItem('accessToken', authResult.accessToken);
    localStorage.setItem('refreshToken', authResult.refreshToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }
  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = +expiration;
    return moment(expiresAt);
  }
}
