import { Component, OnInit } from '@angular/core';
import { GooglePlacesAPIService } from '../service/google-places-api.service';
import { SpotPage } from '../spot/spot.page';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spot-details',
  templateUrl: './spot-details.page.html',
  styleUrls: ['./spot-details.page.scss'],
})
export class SpotDetailsPage implements OnInit {

  place_id: string;
  linearDistance: string;
  src: string;
  lat: string;
  lng: string;
  spotDetails: any;
  currentLoc: any = [];

  constructor(public api:GooglePlacesAPIService, private geolocation: Geolocation, private router: Router) {
    // this.getCurrentLocation()
   }

  getCurrentLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.currentLoc = [{
        latitude:resp.coords.latitude,
        longitude:resp.coords.longitude
      }];    
     }).catch((error) => {
       console.log('Error getting location', error);
     });

  }

  ngOnInit() {
    this.place_id = sessionStorage.getItem("place_id")
    this.linearDistance = sessionStorage.getItem('linearDistance');
    this.src = sessionStorage.getItem('src');
    this.lat = sessionStorage.getItem('lat');
    this.lng = sessionStorage.getItem('lng');
    this.fetchLocation(this.place_id);
    this.getCurrentLocation();
  }

  fetchLocation(place_id:string){
    this.api.getPlaceDetails(place_id).subscribe(result => {
      console.log(result);
      this.spotDetails = Array.of(result);
      this.spotDetails[0].result.linearDistance = this.linearDistance;
      this.spotDetails[0].result.src = this.src;
    })
  }

  navigateToPlace(){
    // console.log("currentLoc " + this.currentLoc[0])
    window.open('https://www.google.com/maps/dir/?api=1&origin=' + this.currentLoc[0].latitude + ',' 
            + this.currentLoc[0].longitude + '&destination=' + this.lat + ',' + this.lng);
  }

  
  createJio(){
    console.log(this.spotDetails)
    this.router.navigateByUrl('/create-jio', {state: {location: this.spotDetails[0], googleid: this.place_id}})
    // this.router.navigateByUrl('/create-jio', {state: {address: this.spotDetails.result.formatted_address, name: this.spotDetails.result.name, rating: this.spotDetails.result.rating}})
  }

}
