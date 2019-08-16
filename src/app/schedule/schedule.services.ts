import { Injectable } from '@angular/core';
import { ISchedule } from './schedule';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private scheduleUrl = 'https://cstt.herokuapp.com/schedules';

   constructor(private http: HttpClient) {

   }
  getSchedules(): Observable<ISchedule[]> {
    return this.http.get<ISchedule[]>(this.scheduleUrl).pipe(
      // tap(data => console.log("All: " + JSON.stringify(data))),
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
