import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JioApiService {
  constructor(private http: HttpClient){ }
  baseUri: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  createJio(jioDetails): Observable<any>{
    console.log("Within API: CreateJio");
    console.log(jioDetails);
    let url = `${this.baseUri}/api/jio/createjio`;
    return this.http.post(url, jioDetails, {withCredentials:true}).pipe(catchError(this.errorMgmt));
  }

  acceptJio(): Observable<any>{
    console.log("Within API: AcceptJio");
    let url = `${this.baseUri}/api/jio/accept-jio`;
    return this.http.post(url, {withCredentials: true}).pipe(catchError(this.errorMgmt));
  }

  deleteJio(jioDetails): Observable<any>{
    console.log("Within API: DeleteJio");
    console.log(jioDetails);
    let url = `${this.baseUri}/api/jio/delete-Jio`;
    return this.http.post(url, jioDetails).pipe(catchError(this.errorMgmt))
  }

  getJios(): Observable<any>{
    console.log("Within API: GetJios");
    let url = `${this.baseUri}/api/jio/getjios`;
    return this.http.get(url, {withCredentials:true}).pipe(catchError(this.errorMgmt))
  }

  getMyJio(): Observable<any>{
    console.log('Within API: GetMyJio')
    let url = `${this.baseUri}/api/jio/getmyjios`
    return this.http.get(url, {withCredentials: true}).pipe(catchError(this.errorMgmt))
  }

  errorMgmt(error: HttpErrorResponse){
    let errorMessage = 'no response';
    if (error.error instanceof ErrorEvent){
        //Get client-side error
        errorMessage = error.error.message;
    } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}