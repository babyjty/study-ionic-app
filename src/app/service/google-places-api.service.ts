import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GooglePlacesAPIService {

  constructor(public http:HttpClient) {}

  getLocations( radius:number, locationCoord:String ){
    return this.http.get(`http://localhost:3000/api/locations/search?radius=${radius}&location=${locationCoord}`);
  }

  getDistance( origin:String, destination:String){
    return this.http.get(`http://localhost:3000/api/locations/distance?origin=${origin}&destination=${destination}`);
  }

  getPlaceSearch( text:String ){
    return this.http.get(`http://localhost:3000/api/locations/placesearch?text=${text}`);
  }

  getPlaceCoordinates( placeID:String ){
    return this.http.get(`http://localhost:3000/api/locations/placecoordinates?placeid=${placeID}`);
  }

  getPlaceDetails( placeID:String ){
    return this.http.get(`http://localhost:3000/api/locations/placedetails?placeid=${placeID}`);
  } 

  getPlacePhoto( photoRef:String, width:number){
    return this.http.get(`http://localhost:3000/api/locations/placephoto?photoRef=${photoRef}&width=${width}`);
  }
}
