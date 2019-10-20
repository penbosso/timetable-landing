import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, mapTo, catchError } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly RERESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: 'LOGGED_USER';

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  private authUrl = environment.apiUrl + '/auth';
  private authUrlRefresh = environment.apiUrl + '/auth/refresh';
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<any>(this.authUrl, {email, password})
          .pipe(
            tap(res => this.doLoginUser(res)),
            mapTo(true),
            catchError(error => {
              this.eventAuthError.next(error)
              return of(false);
            })
          );
  }

  logout() {
    localStorage.removeItem(this.loggedUser);
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

  isAdmin(): boolean {
    if(+this.getLoggedUser().permission === 3) {
      return true;
    }
    return false;
  }

  isEditor(): boolean  {
    if(+this.getLoggedUser().permission > 1) {
      return true;
    }
    return false;
  }
  getLoggedUser() {
    return JSON.parse(localStorage.getItem(this.loggedUser));
  }

  private doLoginUser(authResult) {
    const decoded = jwt_decode(authResult.accessToken);
    const currentUser = JSON.stringify({
      name: decoded["name"],
      permission: decoded["permissionLevel"],
      email: decoded["email"],
      id: decoded["userId"]
    });
    console.log(currentUser );
    localStorage.setItem(this.loggedUser, currentUser );
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
