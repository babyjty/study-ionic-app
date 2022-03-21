import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { GooglePlacesAPIService } from '../service/google-places-api.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spot',
  templateUrl: 'spot.page.html',
  styleUrls: ['spot.page.scss']
})
export class SpotPage {
  public radius: number = 2000;
  public locationData:any;
  public filteredLocations:any;
  public currentCoord:String = undefined;
  public preferredLoc:String = undefined;

  orderHeader: String = '';
  isDescOrder: boolean = true;
  filterResult: any;

  constructor(public api:GooglePlacesAPIService, private geolocation:Geolocation, 
    private actionSheetController: ActionSheetController, private router: Router) {
    
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
          let coord:String, lat:number, lng:number;

          for (let key in resultCoord){
            if (resultCoord.hasOwnProperty(key)){
              if (key == 'lat'){
                lat = resultCoord[key];
              }
              else if (key == 'lng'){
                lng = resultCoord[key]
              }
              else{
                coord = resultCoord[key];
              }
            }
          }

          this.api.getLocations(this.radius, coord).subscribe(result=>{
            this.locationData = result;
            let destination:String;
            
            // Get the distances for all the locations retrieved from Google Places
            for (let i = 0; i < this.locationData.length; i++){
              destination = 'place_id:' + this.locationData[i].place_id;
              // Get walking distance
              this.fetchDistance(placeID, destination, i);


              let lat2 = this.locationData[i].geometry.location.lat;
              let lng2 = this.locationData[i].geometry.location.lng;
              
              // Get straight line distance using Haversine Formula
              this.locationData[i].linearDistance = this.getDistanceFromLatLonInKm(lat, lng, lat2, lng2);
              
              // Add picture for each location
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
            this.filteredLocations = this.locationData;
          })

        })
      })
  }

  // fetchLocation(place_id:String){
  //   this.api.getPlaceDetails(place_id).subscribe(result => {
  //     console.log(result);
  //   })
  // }

  fetchDistance(origin:String, destination:String, index:number ){
    // Google Distance Matrix API call 
      this.api.getDistance(origin, destination).subscribe(result =>{
        this.locationData[index].walkingDistance = Number(result) / 1000;
      })
  }

  getDistanceFromLatLonInKm(lat1:number, lon1:number, lat2:number, lon2:number) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1); 
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return Math.round(d * 1000) / 1000;
  }

  deg2rad( deg:number ) {
    return deg * (Math.PI/180)
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
        text: 'Distance',
        handler: () => {
          this.sort('linearDistance');
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


  // filter(array: string, func: any) {
  //   let array2 = [];
  //   for ( var counter = 0; counter < array.length; counter++) {       
  //     if (func(array[counter], counter, array )) {
  //       array2.push(array[counter]);
  //     }
  //   }
  //   return array2;
  // }

  async filtering() {

    const actionSheet = await this.actionSheetController.create({
      header: 'FILTER BY',
      buttons: [{
        text: 'Distance',
        data: 'Data value',
        handler: () => {
          this.filteringDistance();
        }
      }, {
        text: 'Rating',
        handler: () => {
          // this.filter('rating',function(value: number) {return value >3});
          this.filteringRating();
        }
      }, {
        text: 'Price',
        data: 10,
        handler: () => {
          this.filteringPrice();
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

  async filteringDistance() {

    const actionSheet = await this.actionSheetController.create({
      header: 'FILTER BY DISTANCE',
      buttons: [{
        text: 'Within 500m',
        data: 10,
        handler: () => {
          this.filteredLocations = this.locationData.filter(item=>{
            if (item.linearDistance <= 0.5){
              return item;
            }
          })
        }
      }, {
        text: 'Within 1000m',
        data: 'Data value',
        handler: () => {
          this.filteredLocations = this.locationData.filter(item=>{
            if (item.linearDistance <= 1.0){
              return item;
            }
          })
        }
      }, {
        text: 'Within 2000m',
        handler: () => {
          this.filteredLocations = this.locationData;
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

  async filteringRating() {

    const actionSheet = await this.actionSheetController.create({
      header: 'FILTER BY RATING',
      buttons: [{
        text: 'Above 4/5',
        data: 10,
        handler: () => {
          this.filteredLocations = this.locationData.filter(item=>{
            if (item.rating >= 4.0){
              return item;
            }
          })
        }
      }, {
        text: 'Above 3/5',
        data: 'Data value',
        handler: () => {
          this.filteredLocations = this.locationData.filter(item=>{
            if (item.rating >= 3.0){
              return item;
            }
          })
        }
      }, {
        text: 'ALL',
        handler: () => {
          this.filteredLocations = this.locationData.filter(item=>{
            if (item.rating >= 0.0){
              return item;
            }
          })
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

  async filteringPrice() {

    const actionSheet = await this.actionSheetController.create({
      header: 'FILTER BY PRICE',
      buttons: [{
        text: '$',
        data: 10,
        handler: () => {
          
        }
      }, {
        text: '$$',
        data: 'Data value',
        handler: () => {
          
        }
      }, {
        text: '$$$',
        handler: () => {
          
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


  // GO TO DETAILS PAGE


  goToDetailsPage(place_id: string) {
    sessionStorage.setItem("place_id", place_id);
    this.router.navigate(['spot-details', place_id]);
  }

  
}


