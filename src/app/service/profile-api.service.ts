
   
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators'
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileApiService {
  constructor(private http: HttpClient){ }
  _isLoggedIn: boolean = false;

  private profile: JSON;

  baseUri: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  // getProfile(userID): Observable<any>{
  //   console.log("Profile-API: Get Profile")
  //   console.log(userID)
  //   let url =  `${this.baseUri}/api/profile/get-profile`;
  //   console.log(url)
  //   return this.http.post(url, userID).pipe(catchError(this.errorMgmt));
  // }

  getProfile(): Observable<any>{
    console.log("Profile-API: Get Profile")
    let url =  `${this.baseUri}/api/profile/getprofile`;
    console.log(url)
    return this.http.get(url).pipe(catchError(this.errorMgmt));

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