import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GooglePlacesAPIService {

  constructor(public http:HttpClient) {}

  getLocations(radius){
    return this.http.get('http://localhost:3000/api/locations/search?radius='+radius);
  }
}
