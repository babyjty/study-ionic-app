import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AngularDelegate, IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GoogleMapsModule } from '@angular/google-maps'
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { AuthApiService } from './service/api.authService';

import { 
  GoogleLoginProvider,
  FacebookLoginProvider,
  SocialLoginModule,
  SocialAuthServiceConfig
 } from 'angularx-social-login';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    GoogleMapsModule, 
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    Geolocation, 
    NativeGeocoder, 
    AuthApiService,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    }, 
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('69384076572-jof55kj6sctfp7ctd6fe2jol7s8blivf.apps.googleusercontent.com')
          },
          /*{
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('69384076572-jof55kj6sctfp7ctd6fe2jol7s8blivf.apps.googleusercontent.com')
          }*/
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
