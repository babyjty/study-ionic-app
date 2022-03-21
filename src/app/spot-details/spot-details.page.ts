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
  spotDetails: any;

  constructor(public api:GooglePlacesAPIService) { }

  ngOnInit() {
    this.place_id = sessionStorage.getItem("place_id")
    this.fetchLocation(this.place_id);
  }

  fetchLocation(place_id:string){
    this.api.getPlaceDetails(place_id).subscribe(result => {
      console.log(result);
      this.spotDetails = Array.of(result);
      this.spotDetails.src = "https://static.vecteezy.com/system/resources/thumbnails/000/599/173/small/coffee.jpg";
    })
  }

}
