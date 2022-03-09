import { Component } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { GooglePlacesAPIService } from '../service/google-places-api.service';

@Component({
  selector: 'app-spot',
  templateUrl: 'spot.page.html',
  styleUrls: ['spot.page.scss']
})
export class SpotPage {
  public radius:any;

  constructor(public api:GooglePlacesAPIService) {}

  fetchLocations(radius){
    this.api.getLocations(this.radius).subscribe(result=>{
      console.log(result);
    })
  }
}
