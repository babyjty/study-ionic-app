import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { defaultMaxListeners } from 'events';
import { fromEventPattern } from 'rxjs';
import { GooglePlacesAPIService } from '../service/google-places-api.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { LocationDetailsPageRoutingModule } from '../location-details/location-details-routing.module';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss']
})
export class MapPage {
  public radius:number = 2000;
  map:any;
  
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  @ViewChild('search', {static: false}) search: IonSearchbar;

  infoWindows: any = [];
  public markers: any = []

  private currentLoc: any = []

  private sg_lat = 1.3521
  private sg_lng = 103.8198

  // constructor(public api:GooglePlacesAPIService){}

  constructor(public api:GooglePlacesAPIService, private geolocation: Geolocation) {}
  
  ngOnInit(){
  }

 getCurrentLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.currentLoc = [{
        latitude:resp.coords.latitude,
        longitude:resp.coords.longitude
      }];    
      this.addCurrentLocToMap(this.currentLoc);
      
      this.map.panTo({lat: this.currentLoc[0].latitude , lng: this.currentLoc[0].longitude});
      
      this.getLocationsNearUser();
      this.map.setZoom(15);
     }).catch((error) => {
       console.log('Error getting location', error);
     });

  }

  getLocationsNearUser(){
    let loc = String(this.currentLoc[0].latitude) + '%2C' + String(this.currentLoc[0].longitude);
    this.api.getLocations(this.radius, loc).subscribe(result=>{
      let locationData = result;
      let newLocation:object;
      for (let key in locationData){
        newLocation = {
          title: locationData[key].name,
          latitude: String(locationData[key].geometry.location.lat),
          longitude: String(locationData[key].geometry.location.lng),
          rating: locationData[key].rating,
        }
        this.markers.push(newLocation);
      }
    })
    this.addMarkersToMap(this.markers);
    console.log("clicked")
  }

  ionViewDidEnter(){
    this.showMap(this.sg_lat, this.sg_lng);
    // this.getCurrentLocation();
    // this.addMarkersToMap(this.currentLoc);
    // this.showMap(this.currentLoc.latitude, this.currentLoc.longitude);
    
  }


  // addMarkerToMap(marker){
  //   let position = new google.maps.LatLng(marker.latitude, marker.longitude);
  //   let mapMarker = new google.maps.Marker({position: position});
  //   mapMarker.setMap(this.map);
  //   console.log(marker + "within add function")
  // }

  addMarkersToMap(markers){
    for(let marker of markers){
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude,
        rating: marker.rating,
        price: marker.price,
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addCurrentLocToMap(markers){
    for(let marker of markers){
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude,
        rating: marker.rating,
        price: marker.price,
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker){
    let infoWindowContent = '<div id="content" style="color:black">' + 
                              '<h2 id="firstHeading" class="firstHeading">' + marker.title + '</h2>' +
                              '<ion-button id="navigate">Navigate</ion-button>' +
                            '</div>';

    // let infoWindowContent = 'hey hey';                     

    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    })

    marker.addListener('click', () => {
        this.closeAllInfoWindows();
        infoWindow.open(this.map, marker)

        google.maps.event.addListenerOnce(infoWindow, 'domready', ()=> {
          document.getElementById('navigate').addEventListener('click', ()=>{
            console.log('button clicked!');
            console.log(this.currentLoc[0].latitude);
            window.open('https://www.google.com/maps/dir/?api=1&origin=' + this.currentLoc[0].latitude + ',' 
            + this.currentLoc[0].longitude + '&destination=' + marker.latitude + ',' + marker.longitude);
            // window.open('https://maps.google.com/maps?saddr=Current+Location&daddr=' + marker.latitude + ',' + marker.longitude);
            // window.open('https://www.google.com/maps/dir/?api1=&destination=' + marker.latitude + ',' + marker.longitude);
          });

        })
    });
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows(){
    for(let window of this.infoWindows){
      window.close();
    }
  }

  showMap(ref_lat, ref_lng){
    const location = new google.maps.LatLng(ref_lat, ref_lng);
    const options = {
      center: location,
      zoom: 12,
      disableDefaultUI: true,
      keyboardShortcuts: false,
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options)
    this.addMarkersToMap(this.markers);
  }

  ionChange(event){
    console.log(event.detail.value);
  }

  // initMap() {
  //   navigator.geolocation.getCurrentPosition((location) => {
  //     console.log(location);
  //     map = new google.maps.Map(this.mapElement.nativeElement, {
  //       center: {lat: location.coords.latitude, lng: location.coords.longitude},
  //       zoom: 15
  //     });
  
  //     infowindow = new google.maps.InfoWindow();
  //     var service = new google.maps.places.PlacesService(map);
  //     service.nearbySearch({
  //       location: {lat: location.coords.latitude, lng: location.coords.longitude},
  //       radius: 1000,
  //       type: ['store']
  //     }, (results,status) => {
  //       if (status === google.maps.places.PlacesServiceStatus.OK) {
  //         for (var i = 0; i < results.length; i++) {
  //           this.createMarker(results[i]);
  //         }
  //       }
  //     });
  //   }, (error) => {
  //     console.log(error);
  //   }, options);
  //   var myplace = {lat: -33.8665, lng: 151.1956};
  // }

}