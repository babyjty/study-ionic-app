import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { defaultMaxListeners } from 'events';
import { fromEventPattern } from 'rxjs';
import { GooglePlacesAPIService } from '../service/google-places-api.service';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss']
})
export class MapPage {
  public radius:any;
  map:any;
  
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  @ViewChild('search', {static: false}) search: IonSearchbar;

  infoWindows: any = [];
  public markers: any = [
    {
      title: "Singapore",
      latitude: "1.3521",
      longitude: "103.8198"
    },
    {
      title: "Singapore2",
      latitude: "1.3722",
      longitude: "103.8299"
    }
  ]
  
  constructor(public api:GooglePlacesAPIService) {}

  updateSearchResults(){
    this.api.getLocations(this.radius).subscribe(result=>{
      let locationData = result;
      let newLocation:object;
      for (let key in locationData){
        newLocation = {
          title: locationData[key].name,
          latitute: String(locationData[key].geometry.location.lat),
          longitude: String(locationData[key].geometry.location.lng)
        }
        this.markers.push(newLocation);
      }
    })
  }

  ionViewDidEnter(){
    this.showMap();
  }

  addMarkersToMap(markers){
    for(let marker of markers){
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker){
    let infoWindowContent = '<div id="content" style="color:black">' + 
                              '<h2 id="firstHeading" class="firstHeading">' + marker.title + '</h2>' +
                              '<p>Latitude: ' + marker.latitude + '</p>' +
                              '<p>Longitude: ' + marker.longitude + '</p>' +
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
  
            window.open('https://maps.google.com/maps?saddr=Current+Location&daddr=' + marker.latitude + ',' + marker.longitude);
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

  showMap(){
    const location = new google.maps.LatLng(1.3521, 103.8198);
    const options = {
      center: location,
      zoom: 10,
      disableDefaultUI: true,
      keyboardShortcuts: false,
      styles: [
        { elementType: "geometry", stylers: [{ color: "#1b2430" }] },
        // 242f3e
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }]
        }]
      
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