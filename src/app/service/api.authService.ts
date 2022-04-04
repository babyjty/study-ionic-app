import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators'
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { FormGroup } from "@angular/forms";
@Injectable({
    providedIn: 'root'
})

export class AuthApiService{
    _isLoggedIn: boolean = false;
    baseUri: string = 'http://localhost:3000';
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    constructor(private http: HttpClient){
        
    }

    //Login for local users
    //data should store email address and the password 
    //in json format
    localLogin(data): Observable<any>{
        //let url = `${this.baseUri}/local-login`;
        console.log("login function")
        let url = `${this.baseUri}/api/localauth/local-login`;
        //console.log("API Middle")
        return this.http.post(url, data, {withCredentials:true}).pipe(catchError(this.errorMgmt))
    }

    // Verify if account exists via email matching 
    verifyAccount(user): Observable<any>{
        console.log("API: Verify Account");
        let url = `${this.baseUri}/api/localauth/verify-account`;
        return this.http.post(url, user, {withCredentials:true}).pipe(catchError(this.errorMgmt));
    }

    // External Registration
    extRegister(data): Observable<any>{
        console.log('API: External Register')
        let url = `${this.baseUri}/api/localauth/local-register`;
        return this.http.post(url, data, {withCredentials:true}).pipe(catchError(this.errorMgmt));
    }

    getProfile(userID): Observable<any>{
        console.log("Profile-API: Get Profile")
        let url =  `${this.baseUri}/api/localauth/get-profile`;
        return this.http.post(url, userID, {withCredentials:true}).pipe(catchError(this.errorMgmt));
      }

    //Signup
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