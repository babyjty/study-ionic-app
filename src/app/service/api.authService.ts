import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators'
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class AuthApiService{
    baseUri: string = 'http://localhost:3000/api/auth';
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    constructor(private http: HttpClient){}

    //Login for local users
    //data should store email address and the password 
    //in json format
    localLogin(data): Observable<any>{
        let url = `${this.baseUri}/local-login`;
        return this.http.post(url, data)
            .pipe(
                catchError(this.errorMgmt)
            )
    }

    // googleLogin(data): Observable<any>{
    //     let url = `${this.baseUri}/google`;

    // }

    //Signup


    errorMgmt(error: HttpErrorResponse){
        let errorMessage = '';
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