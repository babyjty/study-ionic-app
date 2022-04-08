import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterPage } from '../register/register.page';
import { LoginPageForm } from './login.page.form';
import { AuthApiService } from './../service/api.authService';
import { SocialUser, GoogleLoginProvider, FacebookLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // Declare class variables
  private form: FormGroup;
  private user: SocialUser
  protected loggedIn = false;

  constructor(
    private router: Router,  // this component is using the router
    private formBuilder: FormBuilder, 
    private authApiService: AuthApiService,
    private authService: SocialAuthService,
    private alertController: AlertController,
  ) { }


  // Create login form as soon as page is initialized
  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
     this.authService.authState.subscribe((user) => {
      localStorage.setItem('profile', JSON.stringify(user));
       this.user = user;
       this.loggedIn = (user != null);
    })
    

  }


  // Redirects user to the register page for local register 
  register(){
    this.router.navigate(['register'])
  }

  // To register/login via external provider Google
  async toGoogle(){
    try{
      await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
          localStorage.setItem('google_auth', JSON.stringify(data));
          console.log("inside")
          console.log(data)
        });
        if(this.user != null){
          try {this.authApiService.verifyAccount(this.user).subscribe((dataR) => {
            console.log(dataR);
            if(dataR.result) {
              this.router.navigateByUrl('/tabs', {state: {email: this.user.email, userID: dataR.userID}})
              localStorage.setItem('userID', JSON.stringify(dataR.userID));
            }
            else{
              console.log(this.user);
              console.log('external')
              this.router.navigateByUrl('/external-register', {state: {email: this.user.email, provider: this.user.provider, providerID: this.user.id}})
          }});} catch(error) {console.log(error)}
        }
        else {
          console.log('Invalid')
        }
      } catch (error) {
        console.log(error)      
    }
  } 

  // To register/login via external provider facebook 
  async toFacebook(){
    try{
      await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((data) => {
          localStorage.setItem('google_auth', JSON.stringify(data));
          console.log("inside")
          console.log(data)
        });
        if(this.user != null){
          try {await this.authApiService.verifyAccount(this.user.email).subscribe((dataR) => {
            console.log(dataR);
            if(dataR.result) {
              localStorage.setItem('userID', JSON.stringify(dataR.userID));
              this.router.navigateByUrl('/tabs', {state: {email: this.user.email, userID: dataR.userID}});
            }
            else{
              console.log(this.user);
              console.log('external')
              this.router.navigateByUrl('/external-register', {state: {email: this.user.email, provider: this.user.provider, providerID: this.user.id}})
            }
          });} catch(error) {console.log(error)}
        }
        else {
          console.log('Invalid')
        }
      } catch (error) {
        console.log(error)      
    }
  }

  // For locally registered users with StudyJio (not FACEBOOK or GOOGLE) to log in
  login(){
    console.log(this.form.value);
    if(!this.form.valid) {
      console.log("Invalid registration");
    } 
    else {
      try{
        let outcome = this.authApiService.localLogin(this.form.value).subscribe(async dataR => {
          console.log(dataR)
          if(dataR.loginSuccess) {
            this.router.navigate(['tabs']);
            localStorage.setItem('userID', JSON.stringify(dataR.userID));
          }
          else {
            await this.presentAlert("Invalid Email/Password", "Kindly key in valid email and password");
            console.log("No such account");
            this.form = new LoginPageForm(this.formBuilder).createForm();
        }});
    } catch(error) {
      console.log(error);
    }
  }}

  // Presents alert whenever a confirmation or warning has to be informed to user.
  // h: Header of alert
  // b: Body of alert
  async presentAlert(h, b){
    const alert = await this.alertController.create({
      header: h,
      subHeader: b,
      buttons: ['Dismiss']
    });
    await alert.present();
  }

}
