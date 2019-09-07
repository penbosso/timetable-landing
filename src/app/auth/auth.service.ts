import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, mapTo, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly RERESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string;

  private authUrl = config.apiUrl + '/auth';
  private authUrlRefresh = config.apiUrl + '/auth/refresh';
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<any>(this.authUrl, {email, password})
          .pipe(
            tap(res => this.doLoginUser(email, res)),
            mapTo(true),
            catchError(error => {
              alert(error.error);
              return of(false);
            })
          );
  }

  logout() {
    this.loggedUser = null;
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.RERESH_TOKEN);
    return true;
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    return this.http.post<any>(this.authUrlRefresh, {
      'refreshToken': this.getRefreshToken()
    }).pipe(tap((tokens) => {
      this.storeJwtToken(tokens.id);
    }));
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(email: string, authResult) {
    this.loggedUser = email;
    localStorage.setItem(this.JWT_TOKEN, authResult.accessToken);
    localStorage.setItem(this.RERESH_TOKEN, authResult.refreshToken);
  }



  private getRefreshToken() {
    return localStorage.getItem(this.RERESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

}
