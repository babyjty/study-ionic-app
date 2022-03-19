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

      let destinations:String = 'place_id:' + this.locationData[0].place_id;
      let placeIDNTU = 'ChIJY0QBmQoP2jERGYItxQAIu7g';

      // Get the place_ids for all the locations retrieved from Google Places
      for (let i = 1; i < this.locationData.length; i++){
        destinations = destinations.concat("",'|place_id:');
        destinations = destinations.concat("",this.locationData[i].place_id);

        this.locationData[i].src = "https://static.vecteezy.com/system/resources/thumbnails/000/599/173/small/coffee.jpg";

        // if (!this.locationData[i].photos){
        //   this.locationData[i].src = "https://static.vecteezy.com/system/resources/thumbnails/000/599/173/small/coffee.jpg";
        // }
        // else{
        //   let pic:String = this.locationData[i].photos[0].html_attributions[0];
        //   let urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
        //   this.locationData[i].src = pic.match(urlRegex)[0];
        //   //console.log(pic.match(urlRegex)[0]);
        // }
      }

      this.fetchDistance(placeIDNTU, destinations);
      console.log(this.locationData);
    })
  }

  fetchDistance(origin:String, destination:String){
    // Google Distance Matrix API call 
      this.api.getDistance(origin, destination).subscribe(result =>{
        for (let item in result){
          //console.log(result[item].distance.text);
          this.locationData[item].distance = result[item].distance.text
        }
      })
  }

  sort(headerName: String) {
    this.isDescOrder = !this.isDescOrder;
    this.orderHeader = headerName;
  }
}
