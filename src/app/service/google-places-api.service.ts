import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GooglePlacesAPIService {
  public _apiKey:any = 'AIzaSyA-1vQYn7cQBGGdn_7OkV4Lh073cXbQIdY';
  public headers = new HttpHeaders();

  constructor(public http:HttpClient) {}

  getLocations(radius){
    return this.http.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=1.356220%2C103.691551&key="+this._apiKey+"&radius=" +radius+"&type=cafe");
  }
}
