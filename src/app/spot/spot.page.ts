import { Component } from '@angular/core';
import { GooglePlacesAPIService } from '../service/google-places-api.service';

@Component({
  selector: 'app-spot',
  templateUrl: 'spot.page.html',
  styleUrls: ['spot.page.scss']
})
export class SpotPage {
  public radius: Number;
  public locationData:any;

  orderHeader: String = '';
  isDescOrder: boolean = true;

  constructor(public api:GooglePlacesAPIService) {}

  fetchLocations(){
    this.api.getLocations(this.radius).subscribe(result=>{
      this.locationData = result;
    })
  }

  sort(headerName: String) {
    this.isDescOrder = !this.isDescOrder;
    this.orderHeader = headerName;
  }
}
