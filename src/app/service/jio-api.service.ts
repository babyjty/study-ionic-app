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

  // To createJio as a Jioer (if there are no existing Jios for that user)
  // jioDetails: JSON consists of the input details of jio
  createJio(jioDetails): Observable<any>{
    console.log("Within API: CreateJio");
    console.log(jioDetails);
    let url = `${this.baseUri}/api/jio/createjio`;
    return this.http.post(url, jioDetails, {withCredentials:true}).pipe(catchError(this.errorMgmt));
  }

  // To acceptJio as a Jioee (if there are no existing Jios for that user)
  // jioDetails: JSON consists of all details of Jio including its unique identifier that the user is interested in joining
  acceptJio(jioDetails): Observable<any>{
    console.log("Within API: AcceptJio");
    let url = `${this.baseUri}/api/jio/acceptjio`;
    return this.http.post(url, jioDetails, {withCredentials: true}).pipe(catchError(this.errorMgmt));
  }

  // To deleteJio as a Jioer (Jio gets removed completely)
  // jioDetails: JSON consists of all details of Jio including its unique identifier
  deleteJio(jioDetails): Observable<any>{
    console.log("Within API: DeleteJio");
    console.log(jioDetails);
    let url = `${this.baseUri}/api/jio/delete`;
    return this.http.post(url, jioDetails, {withCredentials: true}).pipe(catchError(this.errorMgmt))
  }

  // To withdrawJio as a Jioee (Jioee not associated with Jio anymore, Jio still exists in database)
  // jioDetails: JSON consists of all details of Jio including its unique identifier
  withdrawJio(jioDetails): Observable <any> {
    console.log("Within API: Withdraw Jio");
    let url = `${this.baseUri}/api/jio/withdrawjio`;
    return this.http.post(url, jioDetails, {withCredentials: true}).pipe(catchError(this.errorMgmt))
  }

  // To obtain a list of valid Jios in the database
  getJios(): Observable<any>{
    console.log("Within API: GetJios");
    let url = `${this.baseUri}/api/jio/getjios`;
    return this.http.get(url, {withCredentials:true}).pipe(catchError(this.errorMgmt))
  }

  // To obtain the current logged in user's Jios as a Jioee or Jioer
  getMyJio(): Observable<any>{
    console.log('Within API: GetMyJio')
    let url = `${this.baseUri}/api/jio/getmyjio`
    return this.http.get(url, {withCredentials: true}).pipe(catchError(this.errorMgmt))
  }

  // To identify the identity of the current logged in user in relation to a particular Jio
  isJioer(jioData): Observable<any>{
    console.log('Within API: IsJioer');
    let url = `${this.baseUri}/api/jio/isjioer`
    return this.http.post(url, jioData, {withCredentials: true}).pipe(catchError(this.errorMgmt))
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