import { Component, OnInit } from '@angular/core';
import { GooglePlacesAPIService } from '../service/google-places-api.service';
import { SpotPage } from '../spot/spot.page';

@Component({
  selector: 'app-spot-details',
  templateUrl: './spot-details.page.html',
  styleUrls: ['./spot-details.page.scss'],
})
export class SpotDetailsPage implements OnInit {

  place_id: string;
  linearDistance: string;
  src: string;
  spotDetails: any;

  constructor(public api:GooglePlacesAPIService) { }

  ngOnInit() {
    this.place_id = sessionStorage.getItem("place_id")
    this.linearDistance = sessionStorage.getItem('linearDistance');
    this.src = sessionStorage.getItem('src');
    this.fetchLocation(this.place_id);
  }

  fetchLocation(place_id:string){
    this.api.getPlaceDetails(place_id).subscribe(result => {
      console.log(result);
      this.spotDetails = Array.of(result);
      this.spotDetails[0].result.linearDistance = this.linearDistance;
      this.spotDetails[0].result.src = this.src;
    })
  }

}
