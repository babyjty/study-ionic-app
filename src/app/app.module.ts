import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularDelegate, IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
// <<<<<<< jiam
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, GoogleMapsModule, HttpClientModule],
  providers: [Geolocation, NativeGeocoder, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
// =======
//   imports: [BrowserModule, 
//           IonicModule.forRoot(),  
//           AppRoutingModule,
//           HttpClientModule],
//   providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
// >>>>>>> main
  bootstrap: [AppComponent],
})
export class AppModule {}
3