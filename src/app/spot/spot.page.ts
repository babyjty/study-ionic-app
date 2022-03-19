import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { GooglePlacesAPIService } from '../service/google-places-api.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-spot',
  templateUrl: 'spot.page.html',
  styleUrls: ['spot.page.scss']
})
export class SpotPage {
  public radius: number = 2000;
  public locationData:any;
  public currentCoord:String = undefined;
  public preferredLoc:String = undefined;

  orderHeader: String = '';
  isDescOrder: boolean = true;
  filterResult: any;

  constructor(public api:GooglePlacesAPIService, private geolocation:Geolocation, private actionSheetController: ActionSheetController) {
    this.getCurrentLocation();
  }

  getCurrentLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.currentCoord = String(resp.coords.latitude) + '%2C' + String(resp.coords.longitude);
      console.log(this.currentCoord);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  fetchLocations(){
    this.api.getPlaceSearch(this.preferredLoc).subscribe(resultID =>{
        let placeID:String = String(resultID);
        if (!placeID){
          return;
        }
        this.api.getPlaceCoordinates(String(placeID)).subscribe(resultCoord =>{
          let placeCoord:String = String(resultCoord);
          
          this.api.getLocations(this.radius, placeCoord).subscribe(result=>{
            this.locationData = result;
            let destination:String;
            
            // Get the place_ids for all the locations retrieved from Google Places
            for (let i = 0; i < this.locationData.length; i++){
              destination = 'place_id:' + this.locationData[i].place_id;
              this.fetchDistance(placeID, destination, i);
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

            console.log(this.locationData);
          })

        })
      })
  }

  fetchDistance(origin:String, destination:String, index:number ){
    // Google Distance Matrix API call 
      this.api.getDistance(origin, destination).subscribe(result =>{
        this.locationData[index].distance = result;
      })
  }


  // SORTING


  sort(headerName: String) {
    this.isDescOrder = !this.isDescOrder;
    this.orderHeader = headerName; 
  }

  async sorting() {

    const actionSheet = await this.actionSheetController.create({
      header: 'SORT BY',
      buttons: [{
        text: 'Name',
        data: 10,
        handler: () => {
          this.sort('name')
        }
      }, {
        text: 'Address',
        data: 'Data value',
        handler: () => {
          this.sort('vicinity');
        }
      }, {
        text: 'Rating',
        handler: () => {
          this.sort('rating');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    // console.log('onDidDismiss resolved with role and data', role, data);

  }


  // SEARCH BAR


  search() {

    const searchbar = document.getElementById("search-bar");
    // const items = Array.from(document.querySelector('ion-list').children);
    const items = this.locationData;

    searchbar.addEventListener('ionInput', handleInput);

    function handleInput(event) {
      const query = event.target.value.toLowerCase();
      requestAnimationFrame(() => {
        items.forEach((item) => {
          const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
          item.style.display = shouldShow ? 'block' : 'none';
        });
      });
    }

  }




  // FILTERING


  filter(array: string, func: any) {
    let array2 = [];
    for ( var counter = 0; counter < array.length; counter++) {       
      if (func(array[counter], counter, array )) {
        array2.push(array[counter]);
      }
    }
    return array2;
  }

  async filtering() {

    const actionSheet = await this.actionSheetController.create({
      header: 'SORT BY',
      buttons: [{
        text: 'Name',
        data: 10,
        handler: () => {
          
        }
      }, {
        text: 'Address',
        data: 'Data value',
        handler: () => {
          
        }
      }, {
        text: 'Rating',
        handler: () => {
          this.filter('rating',function(value: number) {return value >3});
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    // console.log('onDidDismiss resolved with role and data', role, data);

  }
}
