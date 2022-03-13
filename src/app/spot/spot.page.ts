import { Component } from '@angular/core';
import { GooglePlacesAPIService } from '../service/google-places-api.service';

@Component({
  selector: 'app-spot',
  templateUrl: 'spot.page.html',
  styleUrls: ['spot.page.scss']
})
export class SpotPage {
  public radius:any;
  public locationData:any;

  constructor(public api:GooglePlacesAPIService) {}

  fetchLocations(){
    this.api.getLocations(this.radius).subscribe(result=>{
      //console.log(result);
      this.locationData = result;
    })
  }
}
