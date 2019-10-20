import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.apiUrl +'/users';
  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<User>(this.baseUrl, user, {headers:headers})
      .pipe(
        tap(data =>console.log('create User: '+ JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    }
    else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
