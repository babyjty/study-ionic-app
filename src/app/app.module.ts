import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularDelegate, IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
=======


import { GoogleMapsModule } from '@angular/google-maps'
import { Geolocation } from '@ionic-native/geolocation/ngx';
>>>>>>> 6fa50275b1bda67dffa1163ca8b54f2c1c1780f8
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { AuthApiService } from './service/api.authService';

import { 
  GoogleLoginProvider,
  FacebookLoginProvider,
  SocialLoginModule,
  SocialAuthServiceConfig
 } from 'angularx-social-login';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
<<<<<<< HEAD
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
=======
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    GoogleMapsModule, 
    HttpClientModule,
    SocialLoginModule,
    AuthModule
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
            provider: new GoogleLoginProvider('364897496119-rrteeo2ddr72f6j3je7nj5t39b7uc7ve.apps.googleusercontent.com')
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1008674980068196')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
>>>>>>> 6fa50275b1bda67dffa1163ca8b54f2c1c1780f8
